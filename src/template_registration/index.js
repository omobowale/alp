import Template1 from "../Templates/template_1";
import Template2 from "../Templates/template_2";
import Template3 from "../Templates/template_3000";
import Template4 from "../Templates/template_4";
import TemplateOneImage from "../assets/homedoc.png"
import TemplateTwoImage from "../assets/homedoc.png"
import TemplateThreeImage from "../assets/homedoc.png"
import TemplateFourImage from "../assets/homedoc.png"
import Template5 from "../Templates/template_5";
import Template6 from "../Templates/template_6";
import Template7 from "../Templates/template_7";
import Template8 from "../Templates/template_8";
import Template9 from "../Templates/template_three";
import TemplateThree from "../Templates/template_three";
import TemplateTwo from "../Templates/template_two";
import TemplateFour from "../Templates/template_four";
import Template12 from "../Templates/template_12";

export const templates = [
    {
        title: "AGENCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: TemplateOneImage,
        price: "1500",
        component: <Template1 name="AGENCY AGREEMENT CORPORATE TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: TemplateTwoImage,
        price: "2500",
        component: <TemplateTwo name="AGENCY AGREEMENT CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: TemplateThreeImage,
        price: "3000",
        component: <TemplateThree name="AGENCY AGREEMENT INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "2100",
        component: <TemplateFour name="AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template5 name="POWER OF ATTORNEY INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY CORPORATE TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template8 name="POWER OF ATTORNEY CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template6 name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO INDIVIDUAL" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template7 name="POWER OF ATTORNEY SPECIFIED PERIOD INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE",
        imagePath: TemplateFourImage,
        price: "3500",
        component: <Template12 name="POWER OF ATTORNEY SPECIFIED PERIOD CORPORATE TO CORPORATE" />
    },

]