import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonInfo } from "../shared/buttonInfo";

const EventInfo = ({ eventPage, matchingMember, matchingMemberTwo }) => {
  return (
    <div className='hidden lg:flex lg:flex-row border-2 mx-24 p-5 rounded-[10px] space-x-5 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 '>
      <div className=''>
        <Image
          src={eventPage.data.imageEvent.url}
          width={650}
          height={600}
          alt='Event Image'
          className='object-contain h-fit w-[50%]  object-left rounded-[10px] float-left mr-5 '
        />
        <div className='font-mont font-bold text-lg md:text-xl leading-6'>
          Organised by:&nbsp;
          <Link href={eventPage.data.member.url}>
            {matchingMember.data.name}
          </Link>
          {matchingMemberTwo && (
            <>
              ,&nbsp;
              <Link
                href={eventPage.data.member.url}
                className='font-mont font-bold text-lg leading-6'
              >
                {matchingMemberTwo.data.name}
              </Link>
            </>
          )}
        </div>

        <div className='font-open leading-[25px] oveer  text-justify md:text-xl py-5'>
          <PrismicRichText field={eventPage.data.description} />
        </div>

        {/* <div className='flex flex-row '>
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`http://maps.google.com/?q=${eventPage.data.city}`}
            icon='/icons/address.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={`${eventPage.data.city}, ${eventPage.data.country}`}
          />{" "}
          <ButtonInfo
            paddingTB='2'
            marginTB='0'
            linkTo={eventPage.data.website.url}
            icon='/icons/website.svg'
            iconHeight='[55px]'
            fontSize='[17px]'
            text='GO TO WEBSITE'
          />
        </div>
        <div className='flex flex-row mt-4'>
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`mailto:${eventPage.data.mail}`}
            icon='/icons/mail.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={eventPage.data.mail}
          />
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`tel:${eventPage.data.phone}`}
            icon='/icons/phone.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={eventPage.data.phone}
          />
        </div> */}
      </div>
    </div>
  );
};

export default EventInfo;
