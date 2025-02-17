import React, { useState } from "react";
import AccordianDownSVG from "../../icons/accordianDown.svg";
import AccordianUpSVG from "../../icons/accordianUp.svg";
import Child1SVG from "../../icons/images/child1.svg";
import Child2SVG from "../../icons/images/child2.svg";
import BusBreakSVG from "../../icons/busBreak.svg";
import SicknessSVG from "../../icons/sickness.svg";
import SunSetSolidSVG from "../../icons/sunsetSolid.svg";
import CalendarSVG from "../../icons/calendar.svg";
import { useTranslation } from "react-i18next";
import AddIcon from "../../icons/addNewIcon.svg"
import { useNavigate } from "react-router-dom";

const Absence = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [absenceList, setAbsenceList] = useState([])
    const [isAccordianOpen, setIsAccordianOpen] = useState<boolean>(false)

    const handleEvent = () => {
        navigate('/addAddress')
    }

    console.log('isAccordianOpen', {isAccordianOpen})

    return (
        <div className="m-5">
            <div className="border my-5 border-2 bg-mainGray h-30 w-full px-5 py-5 rounded-3xl">
                <div className="flex justify-between w-full items-center">
                    <div className="w-[5rem]">
                        <img src={Child1SVG} className="w-[3rem] h-[3rem]"/>
                    </div>
                    <div className="w-[30rem] ml-5">
                        <div className="flex justify-between h-7">
                            <h1 className="text-base font-sf-pro-rounded">Adam Ahmed Fathy Mohamed</h1>
                            <div onClick={() => setIsAccordianOpen(!isAccordianOpen)} className="w-[3rem] h-[2.5rem] mt-1 justify-end flex">
                                <img src={isAccordianOpen ? AccordianUpSVG : AccordianDownSVG} className="w-[1rem] h-[1rem]" />
                            </div>
                        </div>
                        {isAccordianOpen && (
                            <div className="flex justify-between">
                                <div className="flex">
                                    <img src={SicknessSVG} className="w-[1.5rem] h-[1.5rem]" />
                                    <h1 className="mx-2">{t('sicknessText')}</h1>
                                </div>
                                <div className="text-mainBlueTint">
                                    15.10.24 - 15.10.24 
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {!isAccordianOpen && (
                    <div className="flex justify-center flex-col ml-[4rem] w-30">
                        <div className="flex my-1">
                            <img src={SicknessSVG} className="w-[1.5rem] h-[1.5rem]" />
                            <h1 className="mx-2">{t('sicknessText')}</h1>
                        </div>
                        <div className="flex my-1">
                            <img src={BusBreakSVG} className="w-[1.5rem] h-[1.5rem]" />
                            <h1 className="mx-2">{t('busSchoolText')}</h1>
                        </div>
                        <div className="flex my-1">
                            <img src={SunSetSolidSVG} className="w-[1.5rem] h-[1.5rem]" />
                            <h1 className="mx-2">{t('afternoonText')}</h1>
                        </div>
                        <div className="flex my-1">
                            <img src={CalendarSVG} className="w-[1.5rem] h-[1.5rem]" />
                            <h1 className="mx-2">15.10.24 - 15.10.24 </h1>
                        </div>
                    </div>
                )}
            </div>
            <div className="border my-5 border-2 bg-mainGray h-30 w-full px-5 py-5 rounded-3xl">
                <div className="flex justify-between w-full items-center">
                    <div className="w-[5rem]">
                        <img src={Child2SVG} className="w-[3rem] h-[3rem]"/>
                    </div>
                    <div className="w-[30rem] ml-5">
                        <div className="flex justify-between h-7">
                            <h1 className="text-base font-sf-pro-rounded">Adam Ahmed Fathy Mohamed</h1>
                            <div className="w-[3rem] h-[3rem] flex justify-end">
                                <img src={AccordianUpSVG} className="w-[1rem] h-[1.5rem]" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img src={SicknessSVG} className="w-[1.5rem] h-[1.5rem]" />
                                <h1 className="mx-2">{t('sicknessText')}</h1>
                            </div>
                            <div className="text-mainBlueTint">
                                15.10.24 - 15.10.24 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                <img src={AddIcon} />
            </div>
        </div>
    )
}

export default Absence;