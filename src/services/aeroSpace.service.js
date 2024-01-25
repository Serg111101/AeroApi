import nodemailer from "nodemailer";

import {
  AeroSpaceTopicsModel,
  AeroSpacePartnersModel,
  AeroSpaceTeamModel,
  AeroSpaceLogoModel,
  AeroSpaceLessons,
  aeroSpaseQuiz,
  AeroSpaceAboutModel,
  AeroSpaceHeaderModel,
  AeroSpaceFooterModel,
  AeroSpaceSatelliteModel,
  AeroSpaceTopicsENModel,
  aeroSpaceQuestionsModel,
} from "../models";
// Local Modules

class AeroSpaceService {
  static async sendMail(name, email, text) {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // company mail

        user: "armasatryan77@gmail.com",
        pass: "qecpbrrmcegejdjd",
      },
    });

    const mailOptions = {
      // company mail
      from: "armasatryan77@gmail.com",
      to: "armasatryan77@gmail.com",
      subject: "Email",
      text: `From ${name}, ${email}, ${text}`,
    };

    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject({ succes: false, error: error });
        } else {
          resolve({
            succes: true,
            info_response: "Email sent: " + info.response,
          });
        }
      });
    });
  }

  static async getLessons(lang) {
    return AeroSpaceLessons.getLessons(lang);
  }

  static async getOurTeam(lang) {
    return AeroSpaceTeamModel.getOurTeam(lang);
  }

  static async getQuiz(lesson, lang) {
    return aeroSpaseQuiz.questions(lesson, lang);
  }

  static async getPartners(lang) {
    return AeroSpacePartnersModel.getPartners(lang);
  }

  static async getSlides(lectures, lang) {
    return AeroSpaceLessons.getSlides(lectures, lang);
  }

  static async getLectures(lesson, lang) {
    return AeroSpaceLessons.getLectures(lesson, lang);
  }

  static async editBlok(lang,different, index, info, id) {
    return AeroSpaceLogoModel.editBlok(lang,different, index, info, id);
  }

  static async addNewBlok(info,lang, different) {
    return AeroSpaceLogoModel.addNewBlok(info,lang, different);
  }
  static async deleteExistBlok(lang, different,index,arrIndex) {
    return AeroSpaceLogoModel.deleteExistBlok(lang, different,index,arrIndex);
  }
  static async editAboutPage(id, info,lang) {
    return AeroSpaceAboutModel.editAboutPage(id, info,lang);
  }
  static async addNewAboutBox(info,lang) {
    return AeroSpaceAboutModel.addNewAboutBox(info,lang);
  }
  static async deleteExistAboutBox(id,lang) {
    return AeroSpaceAboutModel.deleteExistAboutBox(id,lang);
  }
  static async addNewLesson(info,lang) {
    return AeroSpaceLessons.addNewLesson(info,lang);
  }
  static async satellite(lang) {
    return AeroSpaceSatelliteModel.satellite(lang);
  }
  
  static async editExistLesson(id, info,lang) {
    return AeroSpaceLessons.editExistLesson(id, info,lang);
  }
  static async deleteExistLesson(id,lang,lesson) {
    return AeroSpaceLessons.deleteExistLesson(id,lang,lesson);
  }

  static async gettopics(lesson, lang) {
    return AeroSpaceTopicsModel.gettopics(lesson, lang);
  }

  static async addNewTopics(info, lang) {
    return AeroSpaceTopicsModel.addNewTopics(info, lang);
  }

  static async editExistTopics(id, info, lang) {
    return AeroSpaceTopicsModel.editExistTopics(id, info, lang);
  }

  static async deleteExistTopics(id, lang) {
    return AeroSpaceTopicsModel.deleteExistTopics(id, lang);
  }

  static async getHomeIcons(different, lang) {
    return AeroSpaceLogoModel.getHomeIcons(different, lang);
  }

  static async getAbout(lang) {
    return AeroSpaceAboutModel.getAbout(lang);
  }

  static async editAbout(info, lang, id) {
    return AeroSpaceAboutModel.editAbout(info, lang,id);
  }

  static getFooter(lang) {
    return AeroSpaceFooterModel.getFooter(lang);
  }
  static getHeader(lang) {
    return AeroSpaceHeaderModel.getHeader(lang);
  }

  static async addHeader(payload,lang) {
    return AeroSpaceHeaderModel.addHeader(payload,lang);
  }

  static async editHeader(payload, id,lang) {
    return AeroSpaceHeaderModel.editHeader(payload, id,lang);
  }

  static async deleteHeader(id) {
    return AeroSpaceHeaderModel.deleteHeader(id);
  }

  static async addFooter(payload, lang) {
    return AeroSpaceFooterModel.addFooter(payload, lang);
  }

  static async editFooter(payload, lang,id) {
    return AeroSpaceFooterModel.editFooter(payload, lang,id);
  }

  static async deleteFooter(id, lang) {
    return AeroSpaceFooterModel.deleteFooter(id, lang);
  }

  static async addNewQuestion(info,lang) {
    return aeroSpaseQuiz.addNewQuestion(info,lang);
  }
  static async editExistQuestion(info, id,lang) {
    return aeroSpaseQuiz.editExistQuestion(info, id,lang);
  }
  static async deleteExistQuestion(id,lang) {
    return aeroSpaseQuiz.deleteExistQuestion(id,lang);
  }

  static async getSatelliteQuestions( lang) {
    return aeroSpaceQuestionsModel.getSatelliteQuestions( lang);
  }

  static async addSatellite(info, lang) {
    console.log(info, lang);
    return AeroSpaceSatelliteModel.addSatellite(info, lang);
  }
  static async editSatellite(info, id, lang,index) {
    return AeroSpaceSatelliteModel.editSatellite(info, id, lang,index);
  }
  static async deleteSatellite(lang, key,index,id) {
    return AeroSpaceSatelliteModel.deleteSatellite(lang, key,index,id);
  }
  static async addSatelliteQuestion(lang,info) {
    return aeroSpaceQuestionsModel.addSatelliteQuestion(lang,info);
  }
  static async editSatelliteQuestion(lang,id,info) {
    return aeroSpaceQuestionsModel.editSatelliteQuestion(lang,id,info);
  }
  static async deleteSatelliteQuestion(lang,id) {
    return aeroSpaceQuestionsModel.deleteSatelliteQuestion(lang,id);
  }
  
  
}

export default AeroSpaceService;
