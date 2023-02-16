import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      logo: "",
      title: "Track your shipment",
      nav1: "Home",
      nav2: "Pricing",
      nav3: "Products",
      nav3inner1: "Solutions",
      nav3inner2: "Dashboard",
      nav3inner3: "Mobile App",
      lang: "عربي",
      signin: "Sign In",
      signup: "Sign Up",
      trno: "Tracking No.",
      latest: "Last update",
      prv: "Provider",
      dlvdt: "Promised Delivery date",
      activity: "Activity Log",
      hub: "Hub",
      date: "Date",
      time: "Time",
      details: "Details",
      pkgcrtd: "Package Created",
      pkgrcvd: "Package Received from Provider",
      dlvrpkg: "Package Out to Delivery",
      pkgdlvrd: "Package Delivered",
      "Cairo Sorting Facility": "Cairo Sorting Facility",
      "Tanta Hub": "Tanta Hub",
      "Mohandseen Hub": "Mohandseen Hub",
      "Alexandria Hub": "Alexandria Hub",
      TICKET_CREATED: "Ticket Created",
      PACKAGE_RECEIVED: "Package Received",
      IN_TRANSIT: "In Transit",
      NOT_YET_SHIPPED: "Not Yet Shipped",
      OUT_FOR_DELIVERY: "Out For Delivery",
      WAITING_FOR_CUSTOMER_ACTION: "Waiting For Customer Action",
      DELIVERED: "Delivered",
      DELIVERED_TO_SENDER: "Delivered To Sender",
      RECEIVED_DELIVERY_LOCATION: "Received Delivery Location",
      reason: "Postponed - The customer asked to postpone delivery",
      at: "at",
      Saturday: "Saturday",
      Sunday: "Sunday",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      "Delivery Address": "Delivery Address",
      address:
        "Embaba, Talaat Harb st., El'Omal city, next to Elbrens. House no. 17, block 33, Cairo",
      issue: "Facing an issue with your package?!",
      rprt: "Report a problem",
      error:
        "No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.",
      inpterr: "Invalid tracking number, only numbers are allowed",
    },
  },
  ar: {
    translation: {
      title: "تتبع شحنتك",
      nav1: "الرئيسية",
      nav2: "التسعير",
      nav3: "منتجات",
      nav3inner1: "الحلول",
      nav3inner2: "لوحة التحكم",
      nav3inner3: "تطبيق الموبايل",
      lang: "En",
      signin: "سجل الدخول",
      signup: "اشترك",
      trno: "رقم الشحنة",
      latest: "آخر تحديث",
      prv: "اسم التاجر",
      dlvdt: "موعد التسليم خلال",
      activity: "تفاصيل الشحنة",
      hub: "الفرع",
      date: "التاريخ",
      time: "الوقت",
      details: "تفاصيل",
      pkgcrtd: "تم إنشاء الشحنة",
      pkgrcvd: "تم استلام الشحنة من التاجر",
      dlvrpkg: "الشحنة خرجت للتسليم",
      pkgdlvrd: "تم التسليم",
      "Cairo Sorting Facility": "القاهرة",
      "Tanta Hub": "طنطا",
      "Mohandseen Hub": "المهندسين",
      "Alexandria Hub": "الأسكندرية",
      TICKET_CREATED: "تم إنشاء الشحنة",
      PACKAGE_RECEIVED: "تم استلام الشحنة من التاجر",
      IN_TRANSIT: "الشحنة خرجت للتسليم",
      NOT_YET_SHIPPED: "لم يتم الشحن بعد",
      OUT_FOR_DELIVERY: "الشحنة خرجت للتسليم",
      WAITING_FOR_CUSTOMER_ACTION: "في انتظار تأكيد العميل",
      DELIVERED: "تم التسليم",
      DELIVERED_TO_SENDER: "تم التسليم للتاجر",
      RECEIVED_DELIVERY_LOCATION: "تم استلام موقع التوصيل",
      reason: "تأجيل - العميل طلب التأجيل ليوم آخر",
      at: "الساعة",
      Saturday: "السبت",
      Sunday: "الأحد",
      Monday: "الأثنين",
      Tuesday: "الثلاثاء",
      Wednesday: "الأربعاء",
      Thursday: "الخميس",
      Friday: "الحمعة",
      "Delivery Address": "عنوان التسليم",
      address:
        "امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٣٣ القاهرة",
      issue: "هل يوجد مشكلة في شحنتك؟!",
      rprt: "إبلاغ عن مشكلة",
      error:
        "لا يمكن العثور على أي سجل لرقم التتبع هذا في الوقت الحالي، يرجى التحقق من الرقم والمحاولة مرة أخرى. لمزيد من المساعدة، يرجى الاتصال بخدمة العملاء.",
      inpterr: "رقم التتبع غير صالح، يسمح فقط بالأرقام",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;