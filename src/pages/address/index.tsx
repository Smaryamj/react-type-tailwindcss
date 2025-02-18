import React, { useEffect, useState } from "react";
import AddIcon from "../../icons/addNewIcon.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
import CustomCard from "../../components/customCardAddress";
import ModalMenu from "../../components/modalAddress";
import DeleteModalAddress from "../../components/deleteModalAddress";
import { useLangugageContext } from "../../contextAPI/contextAPI";

interface AddressListProps{
    pickUpType: string,
    address: string
}

const Address = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const [addressList, setAddressList] = useState<AddressListProps[]>([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const propsData = location.state;
    const navigate = useNavigate();
    const handleEvent = () => {
        navigate('/addAddress')
    }

    const { localeLang, toggleLocaleLang } = useLangugageContext();

    useEffect(() => {
        if(!!propsData){
            const {pickUpTpe, address} = propsData;
            setAddressList(addressList => [...addressList, {pickUpType: pickUpTpe, address: address}])
        }
    }, [propsData])

    const onClickOpenMenu = () => {
        console.log("open menu")
        setIsModalOpen(!isModalOpen)
    }

    const onClickOpenMenuDelete = () => {
        console.log("open delete")
        setIsModalOpen(false)
        setIsDeleteModalOpen(true)
    }

    return(
        <div className={`${localeLang === 'en' ? 'ltr' : 'rtl'}`}>
            {!!addressList && !(addressList.length > 0) && (
                <div className="h-screen flex items-center justify-center bg-gray-100">
                    <div className="flex items-center mx-[5.5rem] sm:mx-[5.5rem] text-center justify-center h-screen m-0 bg-gray-100">
                        <h2 className="items-center text-mainBlue font-sf-pro-rounded ">{t('addAddressText')}</h2>
                    </div>
                    <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                        <img src={AddIcon} />
                    </div>
                </div>
            )}
            {addressList && addressList.length > 0 && (
                <div className="h-screen flex justify-center bg-gray-100">
                    {
                        addressList && addressList.length > 0 && (
                            <CustomCard onClickAddress={() => {}}  onClickMenu={() => onClickOpenMenu()}/>
                        )
                    }
                    <div onClick={() => handleEvent()} className="fixed bottom-0 right-5 text-white bg-opacity-60 p-3 rounded">
                        <img src={AddIcon} />
                    </div>
                    <ModalMenu title="Modal Tile" isOpen={isModalOpen} onClickDelete={() => onClickOpenMenuDelete()} onClose={() => onClickOpenMenu()} />
                    <DeleteModalAddress title="Modal Delete" isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
                </div>
            )}
        </div>
    )
}

export default Address