// NPM Modules
import express from "express";

// Local Modules
import { AeroSpaceController } from "../controller";
import { ImageUploadMiddleware } from "../middlewares/image-upload.middleware";
import { VideoUploadMiddleware } from "../middlewares/video-upload.middleware";
import { GifUploadMiddleware } from "../middlewares/gif-upload.middleware";
import AuthMiddleware from "../auth/auth.middlware";

import {
  MailValidationMiddleware,
  HeaderValidationMiddleware,
  FooterValidationMiddleware,
  BlokValidationMiddleware,
  AboutValidationMiddleware,
  QuizValidationMiddleware,
  LessonValidationMiddleware,
  TopicValidationMiddleware,
  OurTeamValidationMiddleware,
  PartnersValidationMiddleware,
  SatelliteValidationMiddleware,
  SatelliteQuizValidationMiddleware,
} from "../middlewares/validation/index";

const router = express.Router();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  USER interfase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.post(
  "/sendMail",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  MailValidationMiddleware.validateMailArgs,
  AeroSpaceController.sendMail
); // completed

router.get(
  "/topics/:lesson/:lang",
  TopicValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.topics
); // completed

router.get(
  "/lessons/:lang",
  LessonValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.lessons
); // completed

router.get(
  "/getLectures/:lesson/:lang",

  // LessonValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getLectures
); // completed

router.get(
  "/slides/:lectures/:lang",
  LessonValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getSlides
); // completed

router.get(
  "/getQuiz/:lesson/:lang",
  QuizValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getQuiz
); // completed

router.get(
  "/getOurTeam/:lang",
  OurTeamValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getOurTeam
); // completed

router.get(
  "/getPartners/:lang",
  PartnersValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AeroSpaceController.getPartners
); // completed

router.get(
  "/homeIcons/:different/:lang",
  BlokValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getHomeIcons
); // completed

router.get(
  "/header/:lang",
  HeaderValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AeroSpaceController.getHeader
); // completed

router.get(
  "/footer/:lang",
  FooterValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AeroSpaceController.getFooter
); // completed

router.get(
  "/about/:lang",
  AboutValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AeroSpaceController.getAbout
); // completed

router.get(
  "/satellite/:lang",
  AboutValidationMiddleware.validateGetArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.satellite
); // completed

router.get(
  "/satelliteQuestions/:lang",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.getSatelliteQuestions
); // completed

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<  ADMIN interfase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// header
// router.post('/addHeader/:lang', /*HeaderValidationMiddleware.validateAddArgs,*/
//   AeroSpaceController.addHeader);
router.put(
  "/editHeader/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  // HeaderValidationMiddleware.validateEditArgs,
  AeroSpaceController.editHeader
);
// router.delete('/deleteHeader/:lang/:id', /*HeaderValidationMiddleware.validateDelByIdArgs,*/
//   AeroSpaceController.deleteHeader);

//---------------------------------------------------------------------------------------------------------------------------
// upload image,video,gif
router.post(
  "/addPicture",
// AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  ImageUploadMiddleware.upload(),
  AeroSpaceController.addPicture
);

router.post(
  "/addVideo",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  VideoUploadMiddleware.upload(),
  AeroSpaceController.addVideo
);

router.post(
  "/addGif",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  GifUploadMiddleware.upload(),
  AeroSpaceController.addGif
);

// completed
//---------------------------------------------------------------------------------------------------------------------------

router.put(
  "/editAbout/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AboutValidationMiddleware.validateEditArgs,
  AeroSpaceController.editAbout
);

// bloks
router.put(
  "/editBlok/:lang/:different/:index/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  BlokValidationMiddleware.validateEditArgs,
  AeroSpaceController.editBlok
);

router.post(
  "/addNewBlok/:lang/:different",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  BlokValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewBlok
);

router.delete(
  "/blok/:lang/:different/:index",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  // BlokValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistBlok
);

// about page
router.put(
  "/editAboutPage/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  // AboutValidationMiddleware.validateEditArgs,
  AeroSpaceController.editAboutPage
);

router.post(
  "/addNewAboutBox/:lang",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AboutValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewAboutBox
);

router.delete(
  "/deleteExistAboutBox/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AboutValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistAboutBox
);

// quiz page
router.post(
  "/addNewQuestion/:lang",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  // QuizValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewQuestion
);

router.put(
  "/editExistQuestion/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  QuizValidationMiddleware.validateEditArgs,
  AeroSpaceController.editExistQuestion
);

router.delete(
  "/deleteExistQuestion/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  QuizValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistQuestion
);

// lesson page
router.post(
  "/addNewLesson/:lang",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  // LessonValidationMiddleware.validateAddArgs, 
  AeroSpaceController.addNewLesson
);

router.put(
  "/editExistLesson/:lang/:id",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  // LessonValidationMiddleware.validateEditArgs,
  AeroSpaceController.editExistLesson
);

router.delete(
  "/deleteExistLesson/:lang/:id/:lesson",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  LessonValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistLesson
);

// topics page
router.post(
  "/addNewTopics/:lang",
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  TopicValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewTopics
);

router.put(
  "/editExistTopics/:lang/:id",
  // TopicValidationMiddleware.validateEditArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.editExistTopics
);

router.delete(
  "/deleteExistTopics/:lang/:id",
  TopicValidationMiddleware.validateDelByIdArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.deleteExistTopics
);

// footer
router.post(
  "/addFooter/:lang",
  FooterValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.addFooter
);

router.put(
  "/editFooter/:lang/:id",
  FooterValidationMiddleware.validateEditArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.editFooter
);

router.delete(
  "/deleteFooter/:id/:lang",
  FooterValidationMiddleware.validateDelByIdArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.deleteFooter
);

// satellite
router.post(
  "/addSatellite/:lang",
  SatelliteValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.addSatellite
);

router.put(
  "/editSatellite/:lang/:id",
  // SatelliteValidationMiddleware.validateEditArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.editSatellite
);

router.delete(
  "/deleteSatellite/:lang/:id/:key/:index",
  SatelliteValidationMiddleware.validateDelByIdArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.deleteSatellite
);

//satellite questions
router.post(
  "/addSatelliteQuestion/:lang",
  SatelliteQuizValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.addSatelliteQuestion
);
router.post(
  "/addLinksAdmin/:lang",
  // SatelliteQuizValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin']),

  AeroSpaceController.addLinksAdmin
);
router.get(
  "/getLinksAdmin/:lang",
  // SatelliteQuizValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin']),

  AeroSpaceController.getLinksAdmin
);



router.put(
  "/editLinksAdmin/:lang/:id",
  // SatelliteQuizValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin']),

  AeroSpaceController.editLinksAdmin
);




router.delete(
  "/deleteLinksAdmin/:lang/:id",
  // SatelliteQuizValidationMiddleware.validateAddArgs,
AuthMiddleware.authenticateFor(['superadmin']),

  AeroSpaceController.deleteLinksAdmin
);






router.put(
  "/editSatelliteQuestion/:lang/:id",
  SatelliteQuizValidationMiddleware.validateEditArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),

  AeroSpaceController.editSatelliteQuestion
);

router.delete(
  "/deleteSatelliteQuestion/:lang/:id",
  SatelliteQuizValidationMiddleware.validateDelByIdArgs,
AuthMiddleware.authenticateFor(['superadmin','admin','children']),
  AeroSpaceController.deleteSatelliteQuestion
);

export default router;
