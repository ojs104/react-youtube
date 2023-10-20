import { GiSoccerKick } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";
import { GiSocks } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


export const menuText = [
    {
        title: "여행 유튜버 홈",
        icon: <GiSoccerField/>,
        src: "/"
    },
    {
        title: "축구 소식",
        icon: <GiSocks/>,
        src: "/today"
    },
    {
        title: "유명 유튜버 소개",
        icon: <GiSoccerKick/>,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "슛포러브",
        src: "/search/슛포러브"
    },
    {
        title: "제이풋볼",
        src: "/search/제이풋볼"
    },
    {
        title: "리춘수",
        src: "/search/리춘수"
    },
    {
        title: "이스타TV",
        src: "/search/이스타TV"
    },
    {
        title: "김진짜",
        src: "/search/김진짜"
    },
    {
        title: "고알레",
        src: "/search/고알레"
    },
    {
        title: "달수네",
        src: "/search/달수네"
    },
    {
        title: "석꾸",
        src: "/search/석꾸"
    },
    {
        title: "이거해줘 원희형",
        src: "/search/이거해줘 원희형"
    },
    {
        title: "꽁병지TV",
        src: "/search/꽁병지TV"
    },
]

export const snsText = [
    {
        title: "Github",
        src: "https://ojs104.github.io/",
        icon: <FaGithub/>
    },
    {
        title: "Youtube",
        src: "https://www.youtube.com/",
        icon: <FaSquareYoutube/>
    },
    {
        title: "Instargram",
        src: "https://www.instagram.com/webstoryboy",
        icon: <FaInstagram/>
    },
    {
        title: "Twitter",
        src: "https://ojs104.github.io/",
        icon: <FaSquareXTwitter/>
    },
]