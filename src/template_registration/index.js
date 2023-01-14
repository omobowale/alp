import Template1 from "../Templates/template_1";
import TemplateOneImage from "../assets/document-icon.png"
import AACTI from "../assets/AACTI.png"
import AAITC from "../assets/AAITC.png"
import AAITI from "../assets/AAITI.png"
import CACTC from "../assets/CACTC.png"
import CACTI from "../assets/CACTI.png"
import CAITC from "../assets/CAITC.png"
import CAITI from "../assets/CAITI.png"
import POACTI from "../assets/POACTI.png"
import POAITI from "../assets/POAITI.png"
import TemplateFourImage from "../assets/document-icon.png"
import Template6 from "../Templates/template_6";
import Template7 from "../Templates/template_7";
import Template12 from "../Templates/template_12";
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
import Template2AACTI from "../Templates/Template2AACTI";
import Template3AAITC from "../Templates/Template3AAITC";
import Template4AAITI from "../Templates/Template4AAITI";
import Template24POAITI from "../Templates/Template24POAITI";
import Template23POACTI from "../Templates/Template23POACTI";

export const templates = [
    {
        title: "AGENCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: TemplateOneImage,
        price: "1500",
        component: <Template1 id="AACTC" name="AGENCY AGREEMENT CORPORATE TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: AACTI,
        price: "1500",
        component: <Template2AACTI id="AACTI" name="AGENCY AGREEMENT CORPORATE TO INDIVIDUAL" imagePath={AACTI} />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: AAITC,
        price: "1500",
        component: <Template3AAITC id="AAITC" name="AGENCY AGREEMENT INDIVIDUAL TO CORPORATE" imagePath={AAITC} />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: AAITI,
        price: "1500",
        component: <Template4AAITI id="AAITI" name="AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" imagePath={AAITI} />
    },
    {
        title: "POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL",
        imagePath: POAITI,
        price: "1500",
        component: <Template24POAITI id="POAITI" name="POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL" imagePath={POAITI} />
    },
    {
        title: "POWER OF ATTORNEY CORPORATE TO INDIVIDUAL",
        imagePath: POACTI,
        price: "1500",
        component: <Template23POACTI id="POACTI" name="POWER OF ATTORNEY CORPORATE TO INDIVIDUAL" imagePath={POACTI} />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: CACTC,
        price: "1500",
        component: <Template9CACTC id="CACTC" name="CONSULTANCY AGREEMENT CORPORATE TO CORPORATE" imagePath={CACTC} />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: CACTI,
        price: "1500",
        component: <Template10CACTI id="CACTI" name="CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL" imagePath={CACTI} />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: CAITC,
        price: "3500",
        component: <Template11CAITC id="CAITC" name="CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE" imagePath={CAITC} />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: CAITI,
        price: "3500",
        component: <Template12CAITI id="CAITI" name="CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" imagePath={CAITI} />
    },
    {
        title: "FRANCHISE AGREEMENT",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template13FA id="FA" name="FRANCHISE AGREEMENT" />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION CORPORATE TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template19POACCTC id="POACCTC" name="POWER OF ATTORNEY CONSIDERATION CORPORATE TO CORPORATE" />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION CORPORATE TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template20POACCTI id="POACCTI" name="POWER OF ATTORNEY CONSIDERATION CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template21POACITC id="POACITC" name="POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template22POACITI id="POACITI" name="POWER OF ATTORNEY CONSIDERATION INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template6 id="POASPITI" name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template7 id="POASPITC" name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template26POASPCTI id="POASPCTI" name="POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template12 id="POASPCTC" name="POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE" />
    },
    {
        title: "WEBSITE PRIVACY POLICY",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template29WPP id="WPP" name="WEBSITE PRIVACY POLICY" />
    },
    {
        title: "WEBSITE TERMS OF SERVICE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template30WTOS id="WTOS" name="WEBSITE TERMS OF SERVICE" />
    },

]