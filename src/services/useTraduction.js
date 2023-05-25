import { useEffect, useState } from "react";
import axios from "axios";

function useTraduction(language, text) {
    const [traduction, setTraduction] = useState("");
    const { v4: uuidv4 } = require("uuid");
    useEffect(() => {
        const translateText = async () => {
            try {
                const response = await axios.post(
                    "https://api.cognitive.microsofttranslator.com/translate",
                    [
                        {
                            text: text,
                        },
                    ],
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Ocp-Apim-Subscription-Key": "1842f47d11f64220b9cee53aa4375987",
                            "Ocp-Apim-Subscription-Region": "francecentral",
                            "X-ClientTraceId": uuidv4().toString(),
                        },
                        params: {
                            "api-version": "3.0",
                            from: "",
                            to: [language],
                        },
                    }
                );

                const translatedText = response.data[0].translations[0].text;
                setTraduction(translatedText);
            } catch (error) {
                console.log(error);
                setTraduction("");
            }
        };

        translateText();
    }, [language, text]);

    return traduction;
}

export default useTraduction;
