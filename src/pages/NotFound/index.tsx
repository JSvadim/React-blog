// hooks
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import Container from "../../components/Container";
import style from "./style.module.scss";
import { notFoundPageVocabulary } from "../../vocabulary/pages/NotFound";


const NotFoundPage: React.FC = () => {

const { language } = useTypedSelector(state => state.language);

    return (
        <Container>
            <h1 className={style["page-title"]}>
                {notFoundPageVocabulary.title[language]}
            </h1>
        </Container>
    )
}


export default NotFoundPage