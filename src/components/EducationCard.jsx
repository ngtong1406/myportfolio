import {
    MapPin,
    Clock,
    GraduationCap,
    Paperclip,
    ExternalLink,
} from "lucide-react";

import academicTranscript from "/files/Nguyen_Tong_Tran_unisa_transcript.pdf";
import unisaLogo from "../assets/photos/unisa-logo.png";
import marryatvilleLogo from "../assets/photos/marryatville-logo.jpg";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function EducationCard() {
    const [expand, setExpand] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        setExpand((state) => !state);
    };

    const details = [
        {
            icon: <MapPin className="w-5 h-5 text-secondary shrink-0" />,
            content: <span>Mawson Lakes, SA</span>,
        },
        {
            icon: <Clock className="w-5 h-5 text-secondary shrink-0" />,
            content: <span>Mar 2023 - Nov 2025 (Graduated in Feb 2026)</span>,
        },
        {
            icon: <GraduationCap className="w-5 h-5 text-secondary shrink-0" />,
            content: <span>GPA: 6.17 / 7.0</span>,
        },
        {
            icon: <Paperclip className="w-5 h-5 text-secondary shrink-0" />,
            content: (
                <a
                    href={academicTranscript}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-secondary underline underline-offset-4 hover:text-white transition-colors"
                >
                    View academic transcript
                    <ExternalLink className="w-5 h-5 text-secondary" />
                </a>
            ),
        },
    ];

    return (
        <div className="w-full flex flex-col gap-4">
            <div
                onClick={onClick}
                className={
                    "w-full flex items-center justify-start gap-7 py-6 px-10 bg-border-sub-light border border-border-main hover:border-secondary hover:cursor-pointer select-none duration-100 " +
                    (expand ? "pb-72 bg-border-subbody" : "")
                }
            >
                <img
                    className="w-18 h-18 rounded-full object-cover"
                    src={unisaLogo}
                    alt=""
                />
                <div>
                    <div className="font-semibold text-white">
                        University of South Australia (UniSA)
                    </div>
                    <div className="text-white">
                        Bachelor of Information Technology (Software
                        Development)
                    </div>
                    <div>Mar. 2023 &mdash; Nov. 2025</div>
                </div>
                <ChevronRight
                    className={
                        "ml-auto duration-100 " + (expand ? "rotate-90" : "")
                    }
                />
            </div>
            <div className="w-full flex items-center justify-start gap-7 py-6 px-10 bg-border-sub-light border border-border-main hover:border-secondary hover:cursor-pointer select-none">
                <img
                    className="w-18 h-18 rounded-full object-cover"
                    src={marryatvilleLogo}
                    alt=""
                />
                <div>
                    <div className="font-semibold text-white">
                        Marryatville High School
                    </div>
                    <div className="text-white">Y10-12 Full-time Student</div>
                    <div>2020 &mdash; 2022</div>
                </div>
                <ChevronRight className="ml-auto" />
            </div>
        </div>
    );
}
