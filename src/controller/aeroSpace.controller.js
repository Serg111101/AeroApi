// Local Modules
import { AeroSpaceService } from "../services";
import { SuccessHandlerUtil } from "../utils";

const HOST_OF_SERVER = process.env.SERVER_HOST;

export default class AeroSpaceController {
  static async sendMail(req, res, next) {
    try {
      const { name, email, text } = req.body;
      const mailResponse = await AeroSpaceService.sendMail(name, email, text);
      SuccessHandlerUtil.handleList(res, next, mailResponse);
    } catch (error) {
      next(error);
    }
  }

  static async getLectures(req, res, next) {
    try {
      const { lesson, lang } = req.params;
      const result = await AeroSpaceService.getLectures(lesson, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async satellite(req, res, next) {
    try {
      const { lang } = req.params;
      const result = await AeroSpaceService.satellite( lang );
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  

  static async getOurTeam(req, res, next) {
    try {
      const { lang } = req.params;
      const getTeam = await AeroSpaceService.getOurTeam(lang);
      SuccessHandlerUtil.handleList(res, next, getTeam);
    } catch (error) {
      next(error);
    }
  }

  static async lessons(req, res, next) {
    try {
      const { lang } = req.params;
      const getLessons = await AeroSpaceService.getLessons(lang);
      SuccessHandlerUtil.handleList(res, next, getLessons);
    } catch (error) {
      next(error);
    }
  }

  static async getSlides(req, res, next) {
    try {
      const { lectures, lang } = req.params;
      const slide = await AeroSpaceService.getSlides(lectures, lang);
      SuccessHandlerUtil.handleList(res, next, slide);
    } catch (error) {
      next(error);
    }
  }

  static async topics(req, res, next) {
    try {
      const { lesson, lang } = req.params;
      const gettopics = await AeroSpaceService.gettopics(lesson, lang);
      SuccessHandlerUtil.handleList(res, next, gettopics);
    } catch (error) {
      next(error);
    }
  }

  static async getQuiz(req, res, next) {
    try {
      const { lesson, lang } = req.params;
      const result = await AeroSpaceService.getQuiz(lesson, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getPartners(req, res, next) {
    try {
      const { lang } = req.params;
      const getPartners = await AeroSpaceService.getPartners(lang);
      SuccessHandlerUtil.handleList(res, next, getPartners);
    } catch (error) {
      next(error);
    }
  }
// ----------------------------------------------------------------------------------------------
// ----------------------- P I C T U R E ------------------------------
  static async addPicture(req, res, next) {
    try {
      const { file } = req;
      const { originalname, filename, path } = file;
      const dirname = `${HOST_OF_SERVER}/` + path;
      SuccessHandlerUtil.handleAdd(res, next, {
        originalname,
        filename,
        dirname,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
// --------------------- V I D E O -----------------------------------------

  static async addVideo(req,res,next){
    try {
      const { file } = req;
      const { post, put } = req.body;
      const { originalname, filename, path } = file;
      const dirname = `${HOST_OF_SERVER}/` + path;
      SuccessHandlerUtil.handleAdd(res, next, {
        post,
        put,
        originalname,
        filename,
        dirname,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
// ---------------------G I F ---------------------------------------------
  static async addGif(req,res,next){
    try {
      const { file } = req;
      const { originalname, filename, path } = file;
      const dirname = `${HOST_OF_SERVER}/` + path;
      SuccessHandlerUtil.handleAdd(res, next, {
        originalname,
        filename,
        dirname,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
// -------------------------------------------------------------------------------------------------
  
  static async editBlok(req, res, next) {
    try {
      const { lang, different, index, id } = req.params;
      const info = req.body;
      const result = await AeroSpaceService.editBlok(lang, different, index, info, id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async getAllLogos(req, res, next) {
    try {
      const result = await AeroSpaceService.getAllLogos();
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async addNewBlok(req, res, next) {
    try {
      const info = req.body;
      const{lang,different} = req.params
      const result = await AeroSpaceService.addNewBlok(info, lang,different);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteExistBlok(req, res, next) {
    try {
      const { lang, different,index } = req.params;
      const {arrIndex} = req.query
      const result = await AeroSpaceService.deleteExistBlok(lang, different,index,arrIndex);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async editAboutPage(req, res, next) {
    try {
      const { lang ,id} = req.params;
      const info = req.body;
      const result = await AeroSpaceService.editAboutPage(id, info,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async addNewAboutBox(req, res, next) {
    try {
      const info = req.body;
      const {lang} = req.params
      const result = await AeroSpaceService.addNewAboutBox(info,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteExistAboutBox(req, res, next) {
    try {
      const { id ,lang} = req.params;
      const result = await AeroSpaceService.deleteExistAboutBox(id,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async addNewLesson(req, res, next) {
    try {
      const info = req.body;
      const {lang} = req.params
      const result = await AeroSpaceService.addNewLesson(info,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async editExistLesson(req, res, next) {
    try {
      const info = req.body;
      const { id, lang } = req.params;
      const result = await AeroSpaceService.editExistLesson(id, info, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async addHeader(req, res, next) {
    try {
      const info = req.body;
      const { lang } = req.params
      const result = await AeroSpaceService.addHeader(info,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async editHeader(req, res, next) {
    try {
      const info = req.body;
      const { id ,lang} = req.params;
      const result = await AeroSpaceService.editHeader(info, id,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteHeader(req, res, next) {
    try {
      const { id } = req.params;
      const result = await AeroSpaceService.deleteHeader(id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteExistLesson(req, res, next) {
    try {
      const { id ,lang,lesson} = req.params;
      const result = await AeroSpaceService.deleteExistLesson(id,lang,lesson);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async addFooter(req, res, next) {
    try {
      const info = req.body;
      const { lang } = req.params;
      const result = await AeroSpaceService.addFooter(info, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async editFooter(req, res, next) {
    try {
      const info = req.body;
      const { id,lang } = req.params;
      const result = await AeroSpaceService.editFooter(info, lang,id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteFooter(req, res, next) {
    try {
      const { id, lang } = req.params;
      const result = await AeroSpaceService.deleteFooter(id, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addNewTopics(req, res, next) {
    try {
      const info = req.body;
      const { lang } = req.params;
      const result = await AeroSpaceService.addNewTopics(info, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async editExistTopics(req, res, next) {
    try {
      const info = req.body;
      const { id, lang } = req.params;
      const result = await AeroSpaceService.editExistTopics(id, info, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteExistTopics(req, res, next) {
    try {
      const { id, lang } = req.params;
      const result = await AeroSpaceService.deleteExistTopics(id, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getHomeIcons(req, res, next) {
    try {
      const { different, lang } = req.params;
      const result = await AeroSpaceService.getHomeIcons(different, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getAbout(req, res, next) {
    try {
      const { lang } = req.params;
      const result = await AeroSpaceService.getAbout(lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async editAbout(req, res, next) {
    try {
      const info = req.body;
      const { id, lang } = req.params;
      const result = await AeroSpaceService.editAbout(info, lang, id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }


  static async getHeader(req, res, next) {
    try {
      const { lang } = req.params;
      const result = await AeroSpaceService.getHeader(lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getFooter(req, res, next) {
    try {
      const { lang } = req.params;
      const result = await AeroSpaceService.getFooter(lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addNewQuestion(req, res, next) {
    try {
      const info = req.body;
      const {lang} = req.params
      const result = await AeroSpaceService.addNewQuestion(info,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async editExistQuestion(req, res, next) {
    try {
      const info = req.body;
      const { id,lang } = req.params;
      const result = await AeroSpaceService.editExistQuestion(info, id,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteExistQuestion(req, res, next) {
    try {
      const { id,lang } = req.params;
      const result = await AeroSpaceService.deleteExistQuestion(id,lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async getSatelliteQuestions(req, res, next) {
    try {
      const { lang } = req.params;
      const result = await AeroSpaceService.getSatelliteQuestions( lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addSatellite(req, res, next) {
    try {
      const info = req.body;
      const { lang } = req.params
      const result = await AeroSpaceService.addSatellite(info, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  
  static async editSatellite(req, res, next) {
    try {
      const info = req.body;
      const { lang, id } = req.params;
      const result = await AeroSpaceService.editSatellite(info, id, lang);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async deleteSatellite(req, res, next) {
    try {
      const { lang, key,index,id } = req.params;
      const result = await AeroSpaceService.deleteSatellite(lang, key,index,id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async addSatelliteQuestion(req, res, next) {
    try {
      const { lang } = req.params;
      const  info  = req.body; 
      const result = await AeroSpaceService.addSatelliteQuestion(lang,info);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async editSatelliteQuestion(req, res, next) {
    try {
      const { lang, id } = req.params;
      const  info  = req.body; 
      const result = await AeroSpaceService.editSatelliteQuestion(lang,id,info);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  static async deleteSatelliteQuestion(req, res, next) {
    try {
      const { lang, id } = req.params;
      const result = await AeroSpaceService.deleteSatelliteQuestion(lang,id);
      SuccessHandlerUtil.handleList(res, next, result);
    } catch (error) {
      next(error);
    }
  }
  

  
}
