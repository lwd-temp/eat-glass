function eatGlassTrans() {
    // 定义预置翻译文本
    const translations = {
        "ar": "أنا قادر على أكل الزجاج و هذا لا يؤلمني",
        "bg": "Мога да ям стъкло, то не ми вреди",
        "ca": "Puc menjar vidre, que no em fa mal",
        "cs": "Mohu jíst sklo, neublíží mi",
        "da": "Jeg kan spise glas, det gør ikke ondt på mig",
        "de": "Ich kann Glas essen, ohne mir zu schaden",
        "el": "Μπορώ να φάω γυαλί χωρίς να πάθω τίποτα",
        "en": "I can eat glass and it doesn't hurt me.",
        "eo": "Mi povas manĝi vitron, ĝi ne damaĝas min",
        "et": "Ma võin süüa klaasi, see ei tee mulle midagi",
        "fa": "من می توانم بدونِ احساس درد شيشه بخورم",
        "fi": "Voin syödä lasia, se ei vahingoita minua",
        "he": "אני יכול לאכול זכוכית וזה לא מזיק לי",
        "hi": "मैं कांच खा सकता हूं और यह मुझे चोट नहीं पहुंचाता",
        "hr": "Mogu jesti staklo, i to mi ne šteti",
        "hu": "Meg tudom enni az üveget, nem lesz tőle bajom",
        "id": "Saya bisa makan kaca dan tidak menyakitkan",
        "it": "Posso mangiare il vetro e non mi fa male",
        "ja": "私はガラスを食べられます。それは私を傷つけません",
        "ko": "나는 유리를 먹을 수 있어요. 그래도 아프지 않아요",
        "lt": "Aš galiu valgyti stiklą ir jis manęs nežeidžia",
        "lv": "Es varu ēst stiklu, tas man nekaitē",
        "mk": "Можам да јадам стакло, а не ме штета",
        "nl": "Ik kan glas eten. Het doet mĳ geen kwaad.",
        "no": "Jeg kan spise glass uten å skade meg",
        "pl": "Mogę jeść szkło, i mi nie szkodzi",
        "pt": "Eu posso comer vidro, não me faz mal",
        "ro": "Pot să mănânc sticlă și ea nu mă rănește",
        "ru": "Я могу есть стекло, оно мне не вредит",
        "sk": "Môžem jesť sklo. Nezraní ma.",
        "sl": "Lahko jem steklo, ne da bi mi škodovalo",
        "sr": "Могу да једем стакло, неће ми ништа нанети штету",
        "sv": "Jag kan äta glas utan att skada mig",
        "th": "ฉันกินกระจกได้ แต่มันไม่ทำให้ฉันเจ็บ",
        "tr": "Cam yiyebilirim, bana zararı dokunmaz",
        "uk": "Я можу їсти скло, і воно мені не зашкодить",
        "vi": "Tôi có thể ăn thủy tinh mà không hại gì",
        "zh": "我能吞下玻璃而不伤身体"
    }

    // 获取当前用户语言
    const userLang = navigator.language || navigator.userLanguage;

    // ISO 639-1
    const lang = userLang.slice(0, 2);

    // 获取翻译文本
    const translation = translations[lang] || "I can eat glass and it doesn't hurt me."; // 如果当前用户语言没有对应翻译，则使用默认英文翻译

    return translation

}

function eatGlass(elementToTranslate) {
    const translatedElement = document.createElement('p');
    translatedElement.textContent = eatGlassTrans();
    elementToTranslate.parentNode.replaceChild(translatedElement, elementToTranslate);
}