import React, { useState } from "react";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "../../components/buttonIcon";
import CancelSVG from "../../icons/cancelIcon.svg"
import SendSVG from "../../icons/sendIcon.svg"
import ArrowRight from "../../icons/arrowRight.svg";
import ArrowDown from "../../icons/arrowDown.svg";
import SickSVG from "../../icons/sickness.svg"
import AmbulanceSVG from "../../icons/ambulanceIcon.svg";
import AirPlaceSVG from "../../icons/airplaneIcon.svg";
import PersonalIconSVG from "../../icons/personalIcon.svg";

const AddNewAbsence = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [isOpenDue, setIsOpenDue] = useState<boolean>(false);
    const [reasonSelection, setReasonSelection] = useState<string>('')
    
    const handleSelectionReason = (value: string) => {
        setReasonSelection(value)
    }

    return(
        <div className="m-5">
            <div onClick={() => navigate('/absence')} className="w-8 h-8 flex justify-center items-center border-1 rounded-full bg-mainGray2">
                <img src={CancelSVG} />
            </div>
            <h1 className="my-5 text-[48px] font-sf-pro-rounded text-mainBlue font-bolder">
                {t('reasonForAbsence')}
            </h1>
            <div className="bg-mainGray w-full my-5 py-5 px-5 border border-mainGray rounded-3xl">
                <div className="flex justify-between items-center">
                    <div className="h-[3rem] w-[3rem] bg-grayDark border rounded-full font-bold font-sf-pro-rounded flex justify-center items-center text-mainBlue font-sf-pro-rounded font-normal text-2xl">
                        1
                    </div>
                    <h1 className="w-40 flex justify-start font-sf-pro-rounded text-[1rem] font-semibold">
                        {t('dueTo')}
                    </h1>
                    <div className="flex justify-between items-center">
                        <h5 className="font-sf-pro-rounded font-normal font-light capitalize ">{reasonSelection !== '' ? reasonSelection : 'Sickness'}</h5>
                        {
                            isOpenDue
                            ?
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowDown} className="w-[1rem] h-[1rem] ml-5" />
                            :
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowRight} className="w-[1rem] h-[1rem] ml-5" />
                        }
                    </div>
                </div>
                {
                    isOpenDue && (
                        <>
                            <div className="flex w-full h-[3rem] border border-1 border-maineBlueTintBorder px-5 py-3 rounded-full justify-between my-2 mt-4">
                                <div className="w-1/6">
                                    <div className="w-[1.5rem] h-[1.5rem] border bg-grayDark rounded-full items-center justify-center flex">
                                        <img src={SickSVG} className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="w-4/6 flex justify-start font-sf-pro-rounded">{t('sicknessText')}</div>
                                <div onClick={() => handleSelectionReason('sickness')} className="w-1/6 flex justify-end">
                                    <div className={`w-5 h-5 border rounded-full items-center justify-center flex ${reasonSelection === 'sickness' ? 'border-mainYellow': 'border-black'}`}>
                                        <div className={`w-3 h-3 rounded-full ${reasonSelection === 'sickness' ? 'bg-mainYellow' : 'border-none'}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-[3rem] border border-1 border-maineBlueTintBorder px-5 py-3 rounded-full justify-between my-2 mt-4">
                                <div className="w-1/6">
                                    <div className="w-[1.5rem] h-[1.5rem] border bg-grayDark rounded-full items-center justify-center flex">
                                        <img src={AmbulanceSVG} className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="w-4/6 flex justify-start font-sf-pro-rounded">{t('emergencyText')}</div>
                                <div onClick={() => handleSelectionReason('emergency')} className="w-1/6 flex justify-end">
                                    <div className={`w-5 h-5 border rounded-full items-center justify-center flex ${reasonSelection === 'emergency' ? 'border-mainYellow': 'border-black'}`}>
                                        <div className={`w-3 h-3 rounded-full ${reasonSelection === 'emergency' ? 'bg-mainYellow' : 'border-none'}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-[3rem] border border-1 border-maineBlueTintBorder px-5 py-3 rounded-full justify-between my-2 mt-4">
                                <div className="w-1/6">
                                    <div className="w-[1.5rem] h-[1.5rem] border bg-grayDark rounded-full items-center justify-center flex">
                                        <img src={PersonalIconSVG} className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="w-4/6 flex justify-start font-sf-pro-rounded">{t('personalText')}</div>
                                <div onClick={() => handleSelectionReason('personal')} className="w-1/6 flex justify-end">
                                    <div className={`w-5 h-5 border rounded-full items-center justify-center flex ${reasonSelection === 'personal' ? 'border-mainYellow': 'border-black'}`}>
                                        <div className={`w-3 h-3 rounded-full ${reasonSelection === 'personal' ? 'bg-mainYellow' : 'border-none'}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full h-[3rem] border border-1 border-maineBlueTintBorder px-5 py-3 rounded-full justify-between my-2 mt-4">
                                <div className="w-1/6">
                                    <div className="w-[1.5rem] h-[1.5rem] border bg-grayDark rounded-full items-center justify-center flex">
                                        <img src={AirPlaceSVG} className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="w-4/6 flex justify-start font-sf-pro-rounded">{t('travellingText')}</div>
                                <div onClick={() => handleSelectionReason('travelling')} className="w-1/6 flex justify-end">
                                    <div className={`w-5 h-5 border rounded-full items-center justify-center flex ${reasonSelection === 'travelling' ? 'border-mainYellow': 'border-black'}`}>
                                        <div className={`w-3 h-3 rounded-full ${reasonSelection === 'travelling' ? 'bg-mainYellow' : 'border-none'}`} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="bg-mainGray w-full py-5 px-5 my-5 border border-mainGray rounded-3xl">
                <div className="flex justify-between items-center">
                    <div className="h-[3rem] w-[3rem] bg-grayDark border rounded-full font-bold font-sf-pro-rounded flex justify-center items-center text-mainBlue font-sf-pro-rounded font-normal text-2xl">
                        1
                    </div>
                    <h1 className="w-40 flex justify-start font-sf-pro-rounded text-[1rem] font-semibold">
                        {t('dueTo')}
                    </h1>
                    <div className="flex justify-between items-center">
                        <h5 className="font-sf-pro-rounded font-normal font-light capitalize ">{reasonSelection !== '' ? reasonSelection : 'Sickness'}</h5>
                        {
                            isOpenDue
                            ?
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowDown} className="w-[1rem] h-[1rem] ml-5" />
                            :
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowRight} className="w-[1rem] h-[1rem] ml-5" />
                        }
                    </div>
                </div>
            </div>
            <div className="bg-mainGray w-full py-5 px-5 my-5 border border-mainGray rounded-3xl">
                <div className="flex justify-between items-center">
                    <div className="h-[3rem] w-[3rem] bg-grayDark border rounded-full font-bold font-sf-pro-rounded flex justify-center items-center text-mainBlue font-sf-pro-rounded font-normal text-2xl">
                        1
                    </div>
                    <h1 className="w-40 flex justify-start font-sf-pro-rounded text-[1rem] font-semibold">
                        {t('dueTo')}
                    </h1>
                    <div className="flex justify-between items-center">
                        <h5 className="font-sf-pro-rounded font-normal font-light capitalize ">{reasonSelection !== '' ? reasonSelection : 'Sickness'}</h5>
                        {
                            isOpenDue
                            ?
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowDown} className="w-[1rem] h-[1rem] ml-5" />
                            :
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowRight} className="w-[1rem] h-[1rem] ml-5" />
                        }
                    </div>
                </div>
            </div>
            <div className="bg-mainGray w-full py-5 px-5 my-5 border border-mainGray rounded-3xl">
                <div className="flex justify-between items-center">
                    <div className="h-[3rem] w-[3rem] bg-grayDark border rounded-full font-bold font-sf-pro-rounded flex justify-center items-center text-mainBlue font-sf-pro-rounded font-normal text-2xl">
                        1
                    </div>
                    <h1 className="w-40 flex justify-start font-sf-pro-rounded text-[1rem] font-semibold">
                        {t('dueTo')}
                    </h1>
                    <div className="flex justify-between items-center">
                        <h5 className="font-sf-pro-rounded font-normal font-light capitalize ">{reasonSelection !== '' ? reasonSelection : 'Sickness'}</h5>
                        {
                            isOpenDue
                            ?
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowDown} className="w-[1rem] h-[1rem] ml-5" />
                            :
                            <img onClick={() => setIsOpenDue(!isOpenDue)} src={ArrowRight} className="w-[1rem] h-[1rem] ml-5" />
                        }
                    </div>
                </div>
            </div>
            <div>
                <ButtonIcon title="Submit" icon={SendSVG} isIconRight={true} customStyle={'bg-mainYellow items-center text-xl font-semibold pr-2 text-mainBlue font-sf-pro-rounded'} />
            </div>
        </div>
    )
}

export default AddNewAbsence;