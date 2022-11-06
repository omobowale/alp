import Template1 from "../Templates/template_1";
import Template2 from "../Templates/template_2";
import Template3 from "../Templates/template_3";
import Template4 from "../Templates/template_4";

export const templates = [
    {
        title: "AGENCY AGREEMENT CORPORATE TO CORPORATE",
        imagePath: "../../public/assets/homedoc.png",
        price: "1500",
        component: <Template1 name="AGENCY AGREEMENT CORPORATE TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT CORPORATE TO INDIVIDUAL",
        imagePath: "assets/homedoc.png",
        price: "2500",
        component: <Template2 name="AGENCY AGREEMENT CORPORATE TO INDIVIDUAL" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO CORPORATE",
        imagePath: "assets/homedoc.png",
        price: "3000",
        component: <Template3 name="AGENCY AGREEMENT INDIVIDUAL TO CORPORATE" />
    },
    {
        title: "AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL",
        imagePath: "assets/homedoc.png",
        price: "3500",
        component: <Template4 name="AGENCY AGREEMENT INDIVIDUAL TO INDIVIDUAL" />
    },

]