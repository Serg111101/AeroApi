// NPM Modules
import express from 'express';

import { ChildrenController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';

// import { AuthValidationMiddleware } from '../middlewares/validation';

const router = express.Router();

router.post('/addTeacher',
  AuthMiddleware.authenticateFor(['superadmin']),
  ChildrenController.addTeacher);

router.get('/getTeacher/:role',
  AuthMiddleware.authenticateFor(['superadmin']),
  ChildrenController.getTeacher);
// router.put('/changepass', 
// ChildrenController.changepass)
  router.put('/putTeacher/:id',
    AuthMiddleware.authenticateFor(['superadmin','admin']),
    ChildrenController.putTeacher);

    router.delete('/deleteTeacher/:id',
    AuthMiddleware.authenticateFor(['superadmin']),
    ChildrenController.deleteTeacher);

router.get('/getChildren/:teacher_id/:classNumber', 
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.getAllChildren);
router.post('/addChildren',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.addChildren);
router.put('/editChildren/:children_id',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.editChild);

router.delete('/deleteChildren/:children_id',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.deleteChildren);

    AuthMiddleware.authenticateFor(['superadmin','admin','children']),
    router.post('/addTest',
    AuthMiddleware.authenticateFor(['superadmin','admin','children']),
     ChildrenController.addTest);

router.get('/getTest/:teacher_id/:children_id',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.getTest);

router.get('/getclass/:teacher_id',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.getClass);

router.post('/addclass/:teacher_id',
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.addClass);

router.delete('/deleteclass/:teacher_id/:classNumber', 
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.deleteClass);
router.put('/putclass', 
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.putClass);

//cubesat links

router.get('/getLink/:teacher_id/:school',
// AuthMiddleware.authenticateFor(['superadmin','admin','children']),
ChildrenController.getLinks);

export default router;
