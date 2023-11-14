import Template1AACTC from "../Templates/Template1AACTC";
import AACTI from "../assets/AACTI.png"
import AAITC from "../assets/AAITC.png"
import AAITI from "../assets/AAITI.png"
import AACTC from "../assets/AACTC.png"
import CACTC from "../assets/CACTC.png"
import CACTI from "../assets/CACTI.png"
import CAITC from "../assets/CAITC.png"
import CAITI from "../assets/CAITI.png"
import POACTI from "../assets/POACTI.png"
import POAITI from "../assets/POAITI.png"
import POACCTC from "../assets/POACCTC.png"
import POACCTI from "../assets/POACCTI.png"
import POACITC from "../assets/POACITC.png"
import POACITI from "../assets/POACITI.png"
import POASPCTC from "../assets/POASPCTC.png"
import POASPITI from "../assets/POASPITI.png"
import POASPITC from "../assets/POASPITC.png"
import POASPCTI from "../assets/POASPCTI.png"
import FA from "../assets/FA.png"
import WPP from "../assets/WPP.png"
import WTOS from "../assets/WTOS.png"
import Template27POASPITC from "../Templates/Template27POASPITC";
import Template26POASPCTI from "../Templates/Template26POASPCTI";
import Template19POACCTC from "../Templates/Template19POACCTC";
import Template20POACCTI from "../Templates/Template20POACCTI";
import Template21POACITC from "../Templates/Template21POACITC";
import Template22POACITI from "../Templates/Template22POACITI";
import Template29WPP from "../Templates/Template29WPP";
import Template30WTOS from "../Templates/Template30WTOS";
import Template9CACTC from "../Templates/Template9CACTC";
import Template10CACTI from "../Templates/Template10CACTI";
import Template11CAITC from "../Templates/Template11CAITC";
import Template12CAITI from "../Templates/Template12CAITI";
import Template13FA from "../Templates/Template13FA";
import Template14LTITC from "../Templates/Template14LTITC";
import Template2AACTI from "../Templates/Template2AACTI";
import Template3AAITC from "../Templates/Template3AAITC";
import Template4AAITI from "../Templates/Template4AAITI";
import Template24POAITI from "../Templates/Template24POAITI";
import Template23POACTI from "../Templates/Template23POACTI";
import Template25POASPCTC from "../Templates/Template25POASPCTC";
import Template28POASPITI from "../Templates/Template28POASPITI";

export const templates = [
    {
        title: "AGENCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: AACTC,
        docId: "AACTC",
        price: "1500",
        component: <Template1AACTC id="AACTC" name="AGENCY AGREEMENT CORPORATE TO CORPORATE" imagePath={AACTC} />
    },
    {
        title: "AGENCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: AACTI,
        docId: "AACTI",
        price: "1500",
        component: <Template2AACTI id="AACTI" name="AGENCY AGREEMENT CORPORATE TO INDIVIDUAL" imagePath={AACTI} />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: AAITC,
        docId: "AAITC",
        price: "1500",
        component: <Template3AAITC id="AAITC" name="AGENCY AGREEMENT INDIVIDUAL TO CORPORATE" imagePath={AAITC} />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: AAITI,
        docId: "AAITI",
        price: "1500",
        component: <Template4AAITI id="AAITI" name="AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" imagePath={AAITI} />
    },
    {
        title: "POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL",
        imagePath: POAITI,
        docId: "POAITI",
        price: "1500",
        component: <Template24POAITI id="POAITI" name="POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL" imagePath={POAITI} />
    },
    {
        title: "POWER OF ATTORNEY CORPORATE TO INDIVIDUAL",
        imagePath: POACTI,
        docId: "POACTI",
        price: "1500",
        component: <Template23POACTI id="POACTI" name="POWER OF ATTORNEY CORPORATE TO INDIVIDUAL" imagePath={POACTI} />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: CACTC,
        docId: "CACTC",
        price: "1500",
        component: <Template9CACTC id="CACTC" name="CONSULTANCY AGREEMENT CORPORATE TO CORPORATE" imagePath={CACTC} />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: CACTI,
        docId: "CACTI",
        price: "1500",
        component: <Template10CACTI id="CACTI" name="CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL" imagePath={CACTI} />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: CAITC,
        docId: "CAITC",
        price: "1500",
        component: <Template11CAITC id="CAITC" name="CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE" imagePath={CAITC} />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: CAITI,
        docId: "CAITI",
        price: "1500",
        component: <Template12CAITI id="CAITI" name="CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" imagePath={CAITI} />
    },
    // {
    //     title: "FRANCHISE AGREEMENT",
    //     imagePath: FA,
    //     docId: "FA",
    //     price: "1500",
    //     component: <Template14LTITC id="FA" name="FRANCHISE AGREEMENT" imagePath={FA} />
    // },
    {
        title: "FRANCHISE AGREEMENT",
        imagePath: FA,
        docId: "FA",
        price: "1500",
        component: <Template13FA id="FA" name="FRANCHISE AGREEMENT" imagePath={FA} />
    },
    // {
    //     title: "FRANCHISE AGREEMENT",
    //     imagePath: FA,
    //     docId: "LTITC",
    //     price: "2500",
    //     component: <Template14LTITC id="LTITC" name="FRANCHISE AGREEMENT" imagePath={FA} />
    // },
    {
        title: "POWER OF ATTORNEY CONSIDERATION CORPORATE TO CORPORATE",
        imagePath: POACCTC,
        docId: "POACCTC",
        price: "1500",
        component: <Template19POACCTC id="POACCTC" name="POWER OF ATTORNEY CONSIDERATION CORPORATE TO CORPORATE" imagePath={POACCTC} />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION CORPORATE TO INDIVIDUAL",
        imagePath: POACCTI,
        docId: "POACCTI",
        price: "1500",
        component: <Template20POACCTI id="POACCTI" name="POWER OF ATTORNEY CONSIDERATION CORPORATE TO INDIVIDUAL" imagePath={POACCTI} />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO CORPORATE",
        imagePath: POACITC,
        docId: "POACITC",
        price: "1500",
        component: <Template21POACITC id="POACITC" name="POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO CORPORATE" imagePath={POACITC} />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO INDIVIDUAL",
        imagePath: POACITI,
        docId: "POACITI",
        price: "1500",
        component: <Template22POACITI id="POACITI" name="POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO INDIVIDUAL" imagePath={POACITI} />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL",
        imagePath: POASPITI,
        docId: "POASPITI",
        price: "1500",
        component: <Template28POASPITI id="POASPITI" name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL" imagePath={POASPITI} />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE",
        imagePath: POASPITC,
        docId: "POASPITC",
        price: "1500",
        component: <Template27POASPITC id="POASPITC" name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE" imagePath={POASPITC} />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO INDIVIDUAL",
        imagePath: POASPCTI,
        docId: "POASPCTI",
        price: "1500",
        component: <Template26POASPCTI id="POASPCTI" name="POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO INDIVIDUAL" imagePath={POASPCTI} />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE",
        imagePath: POASPCTC,
        docId: "POASPCTC",
        price: "1500",
        component: <Template25POASPCTC id="POASPCTC" name="POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE" imagePath={POASPCTC} />
    },
    {
        title: "WEBSITE PRIVACY POLICY",
        imagePath: WPP,
        docId: "WPP",
        price: "1500",
        component: <Template29WPP id="WPP" name="WEBSITE PRIVACY POLICY" imagePath={WPP} />
    },
    {
        title: "WEBSITE TERMS OF SERVICE",
        imagePath: WTOS,
        docId: "WTOS",
        price: "1500",
        component: <Template30WTOS id="WTOS" name="WEBSITE TERMS OF SERVICE" imagePath={WTOS} />
    },

]