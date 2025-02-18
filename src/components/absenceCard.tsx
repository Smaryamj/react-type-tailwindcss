import React from 'react';
import { useTranslation } from 'react-i18next';
import AccordianDownSVG from "../icons/accordianDown.svg";
import AccordianUpSVG from "../icons/accordianUp.svg";
import Child1SVG from "../icons/images/child1.svg";
import Child2SVG from "../icons/images/child2.svg";
import BusBreakSVG from "../icons/busBreak.svg";
import SicknessSVG from "../icons/sickness.svg";
import SunSetSolidSVG from "../icons/sunsetSolid.svg";
import CalendarSVG from "../icons/calendar.svg";

interface AbsenceCard {
    isAccordianOpen: boolean,
    childName: string,
    absenceReason: string,
    absenceFrom: string,
    absenceIn: string,
    absenceWhen: string,
    key: any,
    isAccordianOpenIndex: number | null,
    setIsAccordian: (_t: boolean) => void;
    setIsAccordianIndex: (_t: number) => void
}

const AbsenceCard: React.FC<AbsenceCard> = ({ isAccordianOpen, setIsAccordian, childName, absenceFrom, absenceIn, absenceReason, absenceWhen, key, isAccordianOpenIndex, setIsAccordianIndex}) => {
    const {t} = useTranslation();
    console.log("==========> key", key)
    return(
        <div key={key} className="border my-5 border-2 bg-mainGray w-full lg:w-[40rem] sm:w-[1rem] px-5 py-5 rounded-3xl">
                <div className="flex justify-between w-full items-center">
                    <div className="w-[5rem]">
                        <img src={Child1SVG} className="w-[3rem] h-[3rem]"/>
                    </div>
                    <div className="w-[30rem] ml-5">
                        <div className="flex justify-between h-7">
                            <h1 className="text-base font-sf-pro-rounded">{childName}</h1>
                            <div onClick={() => {
                                setIsAccordian(!isAccordianOpen)
                                setIsAccordianIndex(key)
                            }} className="w-[3rem] h-[2.5rem] mt-1 justify-end flex">
                                <img src={isAccordianOpen ? AccordianDownSVG : AccordianUpSVG} className="w-[1rem] h-[1rem]" />
                            </div>
                        </div>
                        {!isAccordianOpen && (
                            <div className="flex justify-between">
                                <div className="flex">
                                    <img src={SicknessSVG} className="w-[1.5rem] h-[1.5rem]" />
                                    <h1 className="mx-2">{t('sicknessText')}</h1>
                                </div>
                                <div className="text-mainBlueTint">
                                    {absenceWhen}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {isAccordianOpen && (isAccordianOpenIndex === key) && (
                    <div className="flex justify-center flex-col w-full ml-[4rem] lg:ml-[7rem] ">
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
    )
}

export default AbsenceCard;