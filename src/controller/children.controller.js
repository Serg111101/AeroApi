// Local Modules
import { ChildrenServices } from '../services';
import { SuccessHandlerUtil } from '../utils';
// import ClientsManager from '../socket/clients-manager';

export default class ChildrenController {
  static async addTeacher(req, res, next) {
    try {
      const infoTeacher = req.body;
      const data = await ChildrenServices.addTeacher(infoTeacher);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  // getCubesatLinks

  static async getCubesatLinks(req, res, next) {
    try {
      const {teacher_id} = req.params;
      const data = await ChildrenServices.getCubesatLinks(teacher_id);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }


  // static async changepass(req, res, next) {
  //   try {
  //     const {role} = req.params;
  //     if (role === 'admin') {
  //       const {id, password,login} =req.body;
  //       const data = await ChildrenServices.changepass(id,password,login);
  //       SuccessHandlerUtil.handleList(res, next, data);
  //     } else {
        
  //     }
    
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async getTeacher(req, res, next) {
    try {
      const {role} = req.params;
      const data = await ChildrenServices.gtTeacher(role);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }

  static async putTeacher(req, res, next) {
    try {
      const{id} = req.params
      const info = req.body;
      const data = await ChildrenServices.putTeacher(id,info);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteTeacher(req, res, next) {
    try {
      const{id} = req.params;
      const data = await ChildrenServices.deleteTeacher(id);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  // Cheldren
  static async addChildren(req, res, next) {
    try {
      const infoChildren = req.body;
      const data = await ChildrenServices.addChildren(infoChildren);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }

  static async getAllChildren(req, res, next) {
    try {
      const { teacher_id, classNumber } = req.params;
      const data = await ChildrenServices.getChildren(teacher_id, classNumber);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }

  static async editChild(req, res, next) {
    try {
      const { children_id } = req.params;
      const updatedInfo = req.body; // Update information from request body
      const updatedChild = await ChildrenServices.editChildren(children_id, updatedInfo);

      SuccessHandlerUtil.handleUpdate(res, next, updatedChild);
    } catch (error) {
      next(error);
    }
  }

  static async deleteChildren(req, res, next) {
    try {
      const { children_id } = req.params;

      const deletedChild = await ChildrenServices.deleteChildren(children_id);

      SuccessHandlerUtil.handleGet(res, next, deletedChild);
    } catch (error) {
      next(error);
    }
  }

  // Test Quiz Methods
  static async addTest(req, res, next) {
    try {
      const infoTest = req.body;
      const data = await ChildrenServices.addTest(infoTest);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }

  static async getTest(req, res, next) {
    try {
      const { teacher_id, children_id } = req.params;
      const data = await ChildrenServices.getTest(teacher_id, children_id);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async putTest(req, res, next) {
    try {
      const { teacher_id, children_id,id} = req.params;
      const unverified = req.body
      
      const data = await ChildrenServices.putTest(teacher_id, children_id,id,unverified);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async addClass(req, res, next) {
    try {
      const {teacher_id} = req.params;
      const {name} = req.body;
      const data = await ChildrenServices.addClass(teacher_id,name);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async getClass(req, res, next) {
    try {
      const {teacher_id} = req.params;
      const data = await ChildrenServices.getClass(teacher_id);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async deleteClass(req, res, next) {
    try {
      const {teacher_id,classNumber} = req.params;
      const data = await ChildrenServices.deleteClass(teacher_id,classNumber);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async putClass(req, res, next) {
    try {
      // const {teacher_id} = req.params;

      const {name,old_name,id,teacher_id,} = req.body;

      const data = await ChildrenServices.putClass(name,old_name,id,teacher_id,);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
  static async getLinks(req, res, next) {
    try {
      const { teacher_id, school } = req.params;
      const data = await ChildrenServices.getLinks(teacher_id, school);
      SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      next(error);
    }
  }
}
