import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";

export default function Games(){
    const[t, i18n] = useTranslation("global")
    let games_title = t("games.title")
    let text = t("games.text")
    let last_ticket = t("games.last_ticket")

    const list_text = text.split(" ")
    const list_last_ticket = last_ticket.split(" ")

    return(
        <div className="games">
            <h4 className="title">{games_title}</h4>
            <div className="text">
            {list_text.map((el, i) =>(
                <motion.span
                className="para"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            </div>
           <hr></hr>
           <h2 className="title">Last Ticket</h2>
            <div className="desc">                
                <div className="desc-text">
                    {list_last_ticket.map((el, i) => (
                        
                        <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.25,
                          delay: i / 10,
                        }}
                        key={i}
                      >
                        {el}{" "}
                      </motion.span>
                    ))}
                </div>
                <div className="desc-img">
                    <a href="https://zandanamk.itch.io/last-ticket" target="_blank"><img src="last_ticket.png"></img></a>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}