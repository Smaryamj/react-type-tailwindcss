import React from "react";
import ProfileAvatar from "./profileAvatar";
import ProfileSVG from "../icons/profile.svg";
import GuardiansSVG from "../icons/guardians.svg";
import AbsenceSVG from "../icons/absence.svg";
import AddressesSVG from "../icons/location.svg";
import SettingsSVG from "../icons/settings.svg";
import ArabicSVG from "../icons/language.svg";
import TalkToUsSVG from "../icons/talk.svg";
import CallCenterSVG from "../icons/call.svg";
import FAQ from "../icons/faq.svg";
import FeedbackSVG from "../icons/feedback.svg";
import LogoutSVG from "../icons/logout.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLangugageContext } from "../contextAPI/contextAPI";

interface DrawerProps {
  isDrawerOpen: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { localeLang, toggleLocaleLang } = useLangugageContext()

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    toggleLocaleLang(newLang)
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };
  return (
    <>
      {/* Overlay (closes drawer when clicking outside) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Side Navigation Drawer with Slide-in Animation */}
      <div className={i18n.language === "ar" ? "rtl" : "ltr"}>
        <div
          className={`fixed left-0 top-0 h-full w-[80%] bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } 
        rounded-tr-3xl rounded-br-3xl flex flex-col`}
        >
          {/* Profile Section */}
          <div
            className={`flex items-center ${
              i18n.language === "ar" ? "space-x-reverse space-x-6" : "space-x-6"
            } text-gray-700 hover:text-blue-500`}
          >
            <ProfileAvatar
              src={
                "https://s3-alpha-sig.figma.com/img/44e1/0dbd/f47f8b2405057fd92348a0f698c5fee3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BJfAZbCUKhadnLuyuvPTw5R6-djDPOCCzJVhLvm~inhKB~UXpFVaew10I10chHdwj-MMEakq398yc5DNUoev9QXHcnBGJTrY76s9ZA~LZrOC5jxBLDglpUCZIbfpNc-o~Uy6U8jCYtax26LUtHzp64VtsFLE1ydlBiSPoU6YhAXTRFHaBl0za~TRfbx4FD4tbP1WSAAYHR2csS2Qd6Ie-km68fkZ~89OTgE25ZHvlBqOfE12l7POdV8p8Qp9d0El3kcqtO152AcJzy-JBLEDbbctnU1X3o0gnnCmefwmhhM9A-sr6OY3cB6R~3MdPVst5DIaqWOROcp6tnROdaCFBQ__"
              }
              size={80}
            ></ProfileAvatar>
            <div>
              <p className="font-bold text-lg ">John Doe</p>
              <p className="text-gray-500 ">johndoe@email.com</p>
            </div>
          </div>

          {/* Navigation Items */}

          <div className="flex-1 overflow-y-auto pl-4 pr-4 pt-6 space-y-4">
            {/* Profile  */}
            <button className="flex items-center  text-gray-700 hover:text-blue-500" onClick={() => navigate('/profile')}>
              <img src={ProfileSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("profile")}
              </span>
            </button>
            {/* Guardian */}
            <button className="flex items-center pt-2  text-gray-700 hover:text-blue-500">
              <img src={GuardiansSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("guardians")}
              </span>
            </button>
            {/* Absence */}
            <button onClick={() => navigate('/absence')} className="flex items-center pt-2  text-gray-700 hover:text-blue-500">
              <img src={AbsenceSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("absence")}
              </span>
            </button>
            {/* Addresses */}
            <button onClick={() => navigate('/address')} className="flex items-center pt-2 text-gray-700 hover:text-blue-500">
              <img src={AddressesSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("addresses")}
              </span>
            </button>
            {/* Settings */}
            <button className="flex items-center  pt-2  text-gray-700 hover:text-blue-500">
              <img src={SettingsSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("settings")}
              </span>
            </button>
            {/* Language */}
            <button
              className="flex items-center pt-2  text-gray-700 hover:text-blue-500"
              onClick={changeLanguage}
            >
              <img src={ArabicSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {i18n.language === "en" ? "العربية" : "English"}
              </span>
            </button>
            {/* Talk to us */}
            <button className="flex items-center pt-8  text-gray-700 hover:text-blue-500">
              <img src={TalkToUsSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("talkToUs")}
              </span>
            </button>
            {/* Call Centers */}
            <button className="flex items-center pt-2  text-gray-700 hover:text-blue-500">
              <img src={CallCenterSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("callCenters")}
              </span>
            </button>
            {/* FAQ */}
            <button className="flex items-center pt-2  text-gray-700 hover:text-blue-500">
              <img src={FAQ} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("faq")}
              </span>
            </button>
            {/* Feedback */}
            <button className="flex items-center pt-2  text-gray-700 hover:text-blue-500">
              <img src={FeedbackSVG} />
              <span className="text-[18px] font-normal text-mainBlue pl-6 pr-6">
                {t("feedback")}
              </span>
            </button>
            {/* Logout */}
            <div className=" pt-6">
              <button
                className="bg-mainYellow text-mainBlue text-[16px] font-medium rounded-full px-5 py-2  text-center inline-flex items-center  w-auto"
                onClick={() => console.log("App logged out successfully")}
              >
                <img src={LogoutSVG} className="h-5 w-5" />
                <span className="text-[16px] font-normal text-mainBlue pl-3 pr-3">
                  {t("logout")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
