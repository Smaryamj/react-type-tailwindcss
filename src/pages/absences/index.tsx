import React, { useEffect, useState } from "react";
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
import AbsenceCard from "../../components/absenceCard";

interface AbsenceListProps {
    id: number,
    childName: string,
    absenceReason: string,
    absenceFrom: string,
    absenceIn: string,
    absenceWhen: string
}

const Absence = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [absenceList, setAbsenceList] = useState<AbsenceListProps[]>([])
    const [isAccordianOpen, setIsAccordianOpen] = useState<boolean>(false)
    const [isAccordianOpenIndex, setIsAccordianIndex] = useState<number | null>(null)

    const handleEvent = () => {
        navigate('/addAbsence')
    }

    const addAbsenceList = () => {
        const result: AbsenceListProps[] = [
            {
                id: 0,
                childName : "Adam Ahmed Fathy Mohamed",
                absenceReason: "Sickness",
                absenceFrom: "Bus & School",
                absenceIn: "Afternoon",
                absenceWhen: "15.10.2024 - 15.10.2024 "
            },
            {
                id: 1,
                childName : "Danielle Fathy Mohamed",
                absenceReason: "Sickness",
                absenceFrom: "School",
                absenceIn: "Morning",
                absenceWhen: "1.1.2025 - 2.1.2025 "
            },
        ]
        setAbsenceList(result)
    }

    useEffect(() => {
        addAbsenceList();
    }, [])

    return (
        <div className="m-5 flex flex-col lg:flex-row sm:flex-col lg:justify-between">
            {
                absenceList && absenceList.length > 0 &&
                absenceList.map((item: AbsenceListProps, index: number) => {
                    return(
                        <AbsenceCard
                            key={item.id}
                            isAccordianOpenIndex={isAccordianOpenIndex}
                            childName={item.childName}
                            absenceWhen={item.absenceWhen}
                            absenceFrom={item.absenceFrom}
                            absenceIn={item.absenceIn}
                            absenceReason={item.absenceReason}
                            isAccordianOpen={isAccordianOpen}
                            setIsAccordian={setIsAccordianOpen}
                            setIsAccordianIndex={setIsAccordianIndex}
                        />
                    )
                })
            }
            <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                <img src={AddIcon} />
            </div>
        </div>
    )
}

export default Absence;