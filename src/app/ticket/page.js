"use client"
import FAQSection from '@/components/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Headers/Header';
import Marquee from '@/components/Marquee/Marquee';
import Sponsors from '@/components/Sponsors/Sponsors';
import TicketNavbar from '@/components/TicketNavbar/TicketNavbar';
import { useState } from 'react';

const REG_POPUP_MSG = [
    { content: "Join us for an immersive day of thought-provoking talks and transformative connections. Elevate your perspective and be inspired by ideas that challenge convention.", isList: false },
    { content: "What Awaits You:", isList: false },
    { content: "Insightful presentations from 7 distinguished speakersacross diverse fields", isList: true },
    { content: "Opportunities to network with forward-thinking individuals", isList: true },
    { content: "A thoughtfully curated lunch and refreshments", isList: true },
    { content: "Premium event materials designed to enrich your experience", isList: true },
    { content: "Who Should Attend: Students, professionals, and visionaries passionate about innovation and progress.", isList: false },
    { content: "Ticket Details:", isList: false },
    { content: "Price: ₹900", isList: true },
    { content: "Venue: Athulya Hall, Infopark, Kochi", isList: true },
    { content: "Date: 28th September 2024", isList: true },
    { content: "Time: 9:30 AM to 5:00 PM", isList: true },
    { content: "Note:Tickets are in high demand—secure your place at this exclusive event today!", isList: false },
]




const CUSAT_POPUP_MSG = [
    { content: "TEDxCUSAT 2024 presents a distinguished day designed for intellectual and professional advancement.", isList: false },
    { content: "Special rate of ₹700 exclusively for CUSAT students", isList: true },
    { content: "Experience insights from 7 distinguished speakers representing diverse fields and expertise", isList: true },
    { content: "Engage in curated networking opportunities with peers and industry leaders", isList: true },
    { content: "Each ticket includes:", isList: false },
    { content: "Comprehensive access to all sessions and talks", isList: true },
    { content: "A gourmet lunch and a selection of refreshments throughout the day", isList: true },
    { content: "A sophisticated event hamperfeaturing keepsakes and essential materials", isList: true },
    { content: "Venue: Athulya Hall, Infopark, Kochi", isList: true },
    { content: "Date: 28th September 2024", isList: true },
    { content: "Time: 9:30 AM to 5:00 PM", isList: true },
    { content: "Join us for a remarkable day of inspiration and enrichment tailored just for you.", isList: false },
]
const EARLY_REG_POPUP_MSG = [
    { content: "For a limited window, take advantage of our exclusive early bird tickets for TEDxCUSAT 2024  Secure your spot at a premier event featuring a day of inspiration and innovation.", isList: false },
    { content: "Each early bird ticket includes:", isList: false },
    { content: "Talks by 7 distinguished speakers from diverse domains, sharing groundbreaking ideas and insights", isList: true },
    { content: "Full access to all sessions, ensuring you experience every compelling discussion", isList: true },
    { content: "Complimentary lunch and a variety of refreshments throughout the day", isList: true },
    { content: " A special event hamper with keepsakes and essential materials", isList: true },
    { content: "Details:", isList: false },
    { content: "Who should attend: Students,professionals,and visionaries  passionate about innovation and progress", isList: true },
    { content: "Price: Special early bird rate of ₹800", isList: true },
    { content: "Venue: Athulya Hall, Infopark, Kochi", isList: true },
    { content: "Date: 28th September 2024", isList: true },
]


const EARLY_CUSAT_POPUP_MSG = [
    { content: "Don’t miss your chance to grab early bird tickets for TEDxCUSAT 2024 at a special rate, available for a limited time only!", isList: false },
    { content: "What’s Included:", isList: false },
    { content: "7 diverse speakers from various domains, sharing groundbreaking ideas", isList: true },
    { content: "Full access  to a day of inspiring talks and innovative insights", isList: true },
    { content: "Exclusive networking opportunities with industry leaders and peers", isList: true },
    { content: "Complimentary lunch and a selection of refreshments throughout the day", isList: true },
    { content: "A special event kit with keepsakes and essential materials", isList: true },
    { content: "Details:", isList: false },
    { content: "Venue: Athulya Hall, Infopark, Kochi", isList: true },
    { content: "Date: 28th September 2024", isList: true },
    { content: "Secure your early bird tickets now and be part of this exceptional event before the offer ends!", isList: false }
]

const TicketCard = ({
    type,
    price,
    redirect,
    popupHandler,
    popupMessageSetter,
    popupTitleSetter,
    popupMessage,
    disabled = false,
}) => {
    function showPopup() {
        if (disabled) return;
        popupHandler(true);
        popupMessageSetter();
        popupTitleSetter(type);
    }

    return (
        <div className='relative '>
            {disabled && (
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 cursor-not-allowed'>
                    <div className="absolute top-0 left-0 w-full h-full z-0 rounded-[8px]"></div>
                    <p className='text-7xl md:text-8xl z-10 md:-rotate-45'>SOLD <span className='text-tedRed'>OUT</span></p>
                </div>
            )}
            <div className={`flex flex-col justify-between text-left w-[90vw] md:w-[35vw] border-black border rounded-[8px] px-4 py-7 hover:scale-105 transform duration-75 overflow-hidden bg-white min-h-[500px] md:min-h-[450px] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} >
                <div>
                    <p className='text-3xl text-tedRed text-left'>{type}</p>
                    <p className='text-lg md:mt-3 tracking-wider'>
                        {popupMessage.slice(0, 4).map((item, index) => (
                            <span key={index} className={`${!item.isList && 'pt-1 md:pt-2'} ${index !== 3 && 'block'}`}>
                                {item.isList && (
                                    <span className='text-tedRed mr-2'>•</span>
                                )}
                                {item.content}
                            </span>
                        ))}
                        ...
                    </p>
                </div>
                <div>

                    <p className='text-2xl'>₹{price}</p>
                    <div className='flex items-center gap-5'>
                        <a href={redirect} className={disabled ? 'pointer-events-none' : ''}>
                            <button
                                className={`flex hover:bg-black border border-black text-white p-3 pt-4 rounded gap-3 items-center bg-tedRed transform duration-75 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={disabled}
                            >
                                <span className="text-xl leading-5">BUY TICKETS</span>
                                <span className="btn__svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.85 24.85"
                                        style={{ transform: "translate(0px)", opacity: 1, height: "20px", width: "20px", strokeWidth: 2 }}>
                                        <g id="Calque_1-2" data-name="Calque 1">
                                            <line style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10 }} x1="0.35" y1="24.5" x2="24.35" y2="0.5"></line>
                                            <polyline style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10 }} points="24.35 24.4 24.35 0.5 0.46 0.5"></polyline>
                                        </g>
                                    </svg>
                                </span>
                            </button>
                        </a>
                        <p
                            className={`text-xl inline-flex gap-2 cursor-pointer border border-black py-3 px-5 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={showPopup}
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                </svg>
                            </span>
                            <span>DETAILS</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};




const page = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupMessage, setPopupMessage] = useState("");

    return (
        <>
            <Header />
            <div className='mt-20 md:mt-[16vh]'></div>
            <div className="md:mx-[8%] marq-ticket border border-black py-2 md:rounded-15 relative min-w-max bg-white">
                <Marquee />
            </div>
            <main className='mb-5 our-journey p-custom font-thunder font-bold '>
                <div className='mt-[8vh]'></div>
                <Sponsors />
                <div className='get-tickets mt-[10vh]'>
                    <p className='md:text-6xl text-5xl text-center md:text-left leading-none'>GET YOUR<br /><span className='text-tedRed'>TICKETS</span> NOW</p>
                    <div className='flex flex-col md:flex-wrap items-center gap-10 md:flex-row justify-start py-5'>
                        <TicketCard
                            popupTitleSetter={setPopupTitle}
                            popupMessageSetter={() => setPopupMessage(EARLY_CUSAT_POPUP_MSG)}
                            popupHandler={setShowPopup}
                            redirect="/ticket/book?type=earlycusatian"
                            price="600"
                            type="EARLY BIRD CUSAT STUDENTS"
                            popupMessage={EARLY_CUSAT_POPUP_MSG}
                            disabled={true}
                        />
                        <TicketCard
                            popupTitleSetter={setPopupTitle}
                            popupMessageSetter={() => setPopupMessage(EARLY_REG_POPUP_MSG)}
                            popupHandler={setShowPopup}
                            redirect="/ticket/book?type=earlyregular"
                            price="800"
                            type="EARLY BIRD REGULAR"
                            popupMessage={EARLY_REG_POPUP_MSG}
                            disabled={true}
                        />
                        <TicketCard
                            popupTitleSetter={setPopupTitle}
                            popupMessageSetter={() => setPopupMessage(CUSAT_POPUP_MSG)}
                            popupHandler={setShowPopup}
                            redirect="/ticket/book?type=cusatian"
                            price="700"
                            type="CUSAT STUDENTS"
                            popupMessage={CUSAT_POPUP_MSG}
                            disabled={true}
                        />
                        <TicketCard
                            popupTitleSetter={setPopupTitle}
                            popupMessageSetter={() => setPopupMessage(REG_POPUP_MSG)}
                            popupHandler={setShowPopup}
                            redirect="/ticket/book?type=regular"
                            price="900"
                            type="REGULAR"
                            popupMessage={REG_POPUP_MSG}
                            disabled={true}
                        />
                    </div>
                </div>
                <FAQSection />
            </main>
            <hr className='border-t border-black' />
            <Footer />
            {showPopup ? (
                <div className="absolute top-0 left-0 z-[9999] w-[100vw] h-[100vw]">
                    <div
                        className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-md:m-2"
                    >
                        <div className="relative w-auto md:my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-4xl font-thunder ">
                                        {popupTitle}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {popupMessage.map((item, index) => (
                                        <span key={index} className={`block ${!item.isList && 'pt-1 md:pt-2'}`}>
                                            {item.isList && (
                                                <span className='text-tedRed mr-2'>•</span>
                                            )}
                                            {item.content}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </>
    )
}

export default page;