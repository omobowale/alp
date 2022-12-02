import Template1 from "../Templates/template_1";
import Template2 from "../Templates/template_2";
import Template3 from "../Templates/template_3000";
import Template4 from "../Templates/template_4";
import TemplateOneImage from "../assets/document-icon.png"
import TemplateTwoImage from "../assets/document-icon.png"
import TemplateThreeImage from "../assets/document-icon.png"
import TemplateFourImage from "../assets/document-icon.png"
import Template5 from "../Templates/template_5";
import Template6 from "../Templates/template_6";
import Template7 from "../Templates/template_7";
import Template8 from "../Templates/template_8";
import Template9 from "../Templates/template_three";
import TemplateThree from "../Templates/template_three";
import TemplateTwo from "../Templates/template_two";
import TemplateFour from "../Templates/template_four";
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

export const templates = [
    {
        title: "AGENCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: TemplateOneImage,
        price: "1500",
        component: <Template1 id="AACTC" name="AGENCY AGREEMENT CORPORATE TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: TemplateTwoImage,
        price: "2500",
        component: <TemplateTwo id="AACTI" name="AGENCY AGREEMENT CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: TemplateThreeImage,
        price: "3000",
        component: <TemplateThree id="AAITC" name="AGENCY AGREEMENT INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "2100",
        component: <TemplateFour id="AAITI" name="AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template5 id="POAITI" name="POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY CORPORATE TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template8 id="POACTI" name="POWER OF ATTORNEY CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "1500",
        component: <Template9CACTC id="CACTC" name="CONSULTANCY AGREEMENT CORPORATE TO CORPORATE" />
    },
    {
        title: "CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template10CACTI id="CACTI" name="CONSULTANCY AGREEMENT CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template11CAITC id="CAITC" name="CONSULTANCY AGREEMENT INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template12CAITI id="CAITI" name="CONSULTANCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" />
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