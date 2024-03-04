// NPM Modules
import { Model } from 'objection';
import knex from 'knex';
import { ErrorsUtil, LoggerUtil } from '../utils';

import knexConfigs from '../../knex.configs';
import { stringify } from 'uuid';
const pg = knex(knexConfigs.development);

const { InputValidationError } = ErrorsUtil;

class ChildrenModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'children'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        login: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        role: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  // Methods
  static async addChildren(info, password) {
    console.log(info, 'lllllllllllllllllllllllllllllllllllll');

    const admin = await pg('admin').where('id', '=', info.teacher_id);
    // console.log(admin[0].cubesat_link, 'kkkkkkkkkkkkkkkkkkkkkkk');
    let payload = {
      fullName:info.fullName,
      bookNumber:info.bookNumber,
      login:info.login,
      picture:info.picture,
      teacher_id:info.teacher_id,
      level:info.level,
      classNumber:info.classNumber,
      role:info.role,
      cubesat_link:admin[0].cubesat_link,
      school:admin[0].school,
      password:password
    }
    
    const x = await ChildrenModel.query().insert({
      ...payload,
      created_at: new Date(), // Add any other necessary fields
      updated_at: new Date()
    }).returning('*');
    return { Message: 'Children succesful added' };
  }

  static async getAllChildren(teacher_id, classNumber) {
    // console.log(teacher_id, classNumber,"jkhgfds");
    try {
      const data = ChildrenModel.query().select('*')
        .where('teacher_id', '=', teacher_id)
        .andWhere('classNumber', '=', classNumber)
        .orderBy('bookNumber')
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch all children');
    }
  }

  static async editChild(childId, updatedInfo,password) {
    try { 
       if(password){
      updatedInfo.password=password

    }

     
      const updatedChild = await pg('children')
        .where('id', '=', childId)
        .update({ ...updatedInfo, updated_at: new Date() });

      return updatedChild;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to edit child');
    }
  }
  static async deleteTeacher(id) {
    try {
      // Check for and delete associated quiz records first
      await pg('quiz').where('children_id', 'in', function() {
        this.select('id').from('children').where('teacher_id', '=', id);
      }).del();
  
      // Now delete the associated child records
      await pg('children').where('teacher_id', '=', id).del();
  
      // Finally, delete the teacher record
      const deletedTeacher = await pg('admin').where('id', '=', id).del();
  
      return deletedTeacher;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete teacher');
    }
  }
  
  
  static async deleteChild(childId) {
    try {
      // Check if there are dependencies in the "quiz" table
      const dependentQuiz = await pg('quiz').where('children_id', '=', childId).del();
      console.log(dependentQuiz,'ffff');
  
      // if (dependentQuiz > 0) {
      //   // Instead of throwing a generic error, send a more informative response
      //   return {
      //     success: false,
      //     message: `Child with ID ${childId} has dependencies in the "quiz" table. Cannot delete.`,
      //   };
      // }
  
      // If no dependencies, proceed with deleting the child
      const deletedChild = await ChildrenModel.query().select('*').where('id', '=', childId).del();
  
      return {
        success: true,
        message: 'Child deleted successfully.',
      };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete child');
    }
  }
  
  
  // Teachers method
  static async createTeacher(info) {
    let user;
    if (info.login) {
      user = await pg('admin')
        .select('*')
        .where('login', '=', info.login);
    }
    if (user == undefined || user.length == 0) {
      return pg('admin')
        .insert({
          login: info.username,
          password: info.password,
          role: 'admin',
          info: info.info || '',
          position: info.position || '',
          fullName:info.fullName,
          school:info.school,
          links:[],
          created_at: new Date()
        })
        .returning('*');
    }
    throw new InputValidationError('User with this email already exist');
  }

  static async getTeacher(role) {
    try {
      const teacher = await pg('admin')
        .select('*')
        .where('role', '=', role)
        .orderBy('id');
      return teacher;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch teacher');
    }
  }
  
  static async putTeacher(id,info,password) {
    console.log('====================================');
    console.log(info,"info00");
    console.log(password,"password000");
    console.log('====================================');
    try {
      if(password != undefined){
        info.password = password

      }
      const teacher = await pg('admin')
        .select('*')
        .where('id', '=', id)
        .update({ ...info, updated_at: new Date() })
      return teacher;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch teacher');
    }
  }

  // Test Models crud
  static async addTest(info) {
    const { incorrect, correct, ...rest } = info;

    try {
      const data = await pg('quiz').insert({
        ...rest,
        incorrect: incorrect, // Assuming 'incorrect' is an array of objects
        correct: correct, // Assuming 'correct' is an array of objects
        created_at: new Date(),
        updated_at: new Date()
      });

      return data;
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
      throw new Error('Failed to add test data');
    }
  }

  static async getTest(teacher_id, children_id) {
    try {
      const result = await pg('quiz')
        .select('*')
        .where('teacher_id', '=', teacher_id)
        .andWhere('children_id', '=', children_id)
        .orderBy("id")
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async putTest(teacher_id, children_id,id,unverified) {
    try {
      const result = await pg('quiz')
      .update(unverified)
      .where('teacher_id', '=', teacher_id)
      .andWhere('children_id', '=', children_id)
      .andWhere('id', '=', id)
        // .andWhereRaw('?? @> ?', ['incorrect', JSON.stringify(unverified)])
        // .returning("*");
      return result;
    } catch (error) {
      console.log(error);
    }
    // const a = await pg('quiz').select('*').where('incorrect', '=', {incorrect:'hello'})
    // console.log(a);
  }

  static async addClass(teacher_id, name) {
    try {
      const result = await pg('class')
      .insert({name,teacher_id})
      .returning('*');

      return result
    } catch (error) {
      console.log(error);
      
    }
  }
  static async getClass(teacher_id) {
    try {
      const result = await pg('class')
      .select('*')
      .where('teacher_id', '=', teacher_id)
      .orderBy('id')

      return result
    } catch (error) {
      console.log(error);
      
    }
  }
  static async deleteClass(teacher_id,classNumber) {
    try {
      const result = await pg('class')
      
      .where('teacher_id', '=', teacher_id)
      .andWhere('name', '=', classNumber)
      .del()

      return result
    } catch (error) {
      console.log(error);
      
    }
  }
  static async putClass(name, old_name, id, teacher_id) {
    try {
      // Update the 'class' table
      const result = await pg('class')
        .where('teacher_id', '=', teacher_id)
        .andWhere('id', '=', id)
        .update({ name });
  
      // Update related records in 'ChildrenModel' table
      const updateChildClassNumber =await ChildrenModel.query()
        .select('*')
        .where('teacher_id', '=', teacher_id)
        .andWhere('classNumber', '=', old_name)
        .update({ classNumber: name });
  
      // Return the result of the update in the 'class' table
      return result;
    } catch (error) {
      // Log any errors that occur during the update
      console.log(error);
    }
  }
  
  static getLogin(login) {
    const x = ChildrenModel.query().findOne({ login });
  }

  static async getLinks(teacher_id, school) {
    try {
      const result = await pg('admin')
        .select('*')
        .where('id', '=', teacher_id)
        .andWhere('school', '=', school);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ChildrenModel;
