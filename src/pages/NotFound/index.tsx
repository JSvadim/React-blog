// hooks
import { useTypedSelector } from "../../hooks/useTypedSelector";

// local imports
import Container from "../../components/Container";
import style from "./style.module.scss";
import { notFoundPageVocabulary } from "../../vocabulary/pages/NotFound";
import { MessageBasic } from "../../components/messages/MessageBasic";


const NotFoundPage: React.FC = () => {

const { language } = useTypedSelector(state => state.language);

    return (
        <Container>
            <MessageBasic
                text={notFoundPageVocabulary.title[language]}
                position="centered-fixed"/>
        </Container>
    )
}


export default NotFoundPage