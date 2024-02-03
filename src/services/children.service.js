// Local Modules
import bcrypt from 'bcrypt';
import { ChildrenModel } from '../models';

export default class ChildrenServices {
  static async addChildren(infoChildren) {
    const password = await bcrypt.hash(infoChildren.password, 5);
    delete infoChildren.password;
    const x = await ChildrenModel.addChildren(infoChildren, password);
    return x;
  }
  // static async changepass(id, login, password) {
  //   return ChildrenModel.changepass(id,login,password);
  // }
  static async getChildren(teacher_id, classNumber) {
    return ChildrenModel.getAllChildren(teacher_id, classNumber);
  }
  static async deleteTeacher(id) {
    
    return ChildrenModel.deleteTeacher(id);
  }
  static async putTeacher(id,info) {
    if(info.password !== undefined){
      const password = await bcrypt.hash(info.password, 5);
      delete info.password;
      const x = await ChildrenModel.putTeacher(id,info, password);
      return x
    }
    const x = await ChildrenModel.putTeacher(id,info,info.password);
    return x

  }

  static async editChildren(children_id, editInfo) {
    if(editInfo.password !== undefined){
    const password = await bcrypt.hash(editInfo.password, 5);
    delete editInfo.password;
    const x = await ChildrenModel.editChild(children_id, editInfo,password);
    return x
    }
    const x = await ChildrenModel.editChild(children_id, editInfo,editInfo.password);
    return x
  }

  static async deleteChildren(children_id) {
    return ChildrenModel.deleteChild(children_id);
  }

  //
  static async addTeacher(infoTeacher) {
    const password = await bcrypt.hash(infoTeacher.password, 5);
    delete infoTeacher.password;

    return ChildrenModel.createTeacher({ ...infoTeacher, password });
  }

  static async gtTeacher(role) {
    return ChildrenModel.getTeacher(role);
  }

  static async addTest(infoTest) {
    return ChildrenModel.addTest(infoTest);
  }

  static async getTest(teacher_id, children_id) {
    return ChildrenModel.getTest(teacher_id, children_id);
  }

  static async putTest(teacher_id, children_id,id,unverified) {
    return ChildrenModel.putTest(teacher_id, children_id,id,unverified);
  }

  static async addClass(teacher_id,name) {
    return ChildrenModel.addClass(teacher_id,name);
  }
  static async getClass(teacher_id) {
    return ChildrenModel.getClass(teacher_id);
  }
  static async deleteClass(teacher_id,classNumber) {
    return ChildrenModel.deleteClass(teacher_id,classNumber);
  }
  static async putClass(name,old_name,id,teacher_id,) {
    return ChildrenModel.putClass(name,old_name,id,teacher_id,);
  }
  static async getLinks(teacher_id, school) {
    return ChildrenModel.getLinks(teacher_id, school);
  }
  
}
