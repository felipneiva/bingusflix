import styles from "./index.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function ManageProfile() {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [error_message, setErrorMessage] = useState("");
    const [success_message, setSuccessMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const token = localStorage.getItem('token');
        const config = {headers: {Authorization: `Bearer ${token}`}};

        try {
            const get_response = await axios.get(`http://localhost:4000/users/${Number(token)}`);
            
            const response = await axios.put(`http://127.0.0.1:8000/profiles/${get_response.data.active_profile}`, {
                nickname: nickname,
                pg: age,
                language: language
            }, config);

            console.log(response.status);
            setErrorMessage("");
            setSuccessMessage("Perfil alterado com sucesso!");
            navigate('/profiles');
        } catch (error) {
            console.error(error);
            setErrorMessage("Não foi possível alterar seu perfil");
            setSuccessMessage("");
        }

    }

    const handleTitleClick = () => {
        navigate('/home-page');
    }

    const handleRemove = async () => {
        const token = localStorage.getItem('token');
        const config = {headers: {Authorization: `Bearer ${token}`}};

        try {
            var get_profiles = await axios.get(`http://127.0.0.1:8000/profiles`, config);   
            
            if (get_profiles.data.profiles.length == 1) {
                setErrorMessage("Não é possível remover o único perfil");
                setSuccessMessage("");
                return;
            }

            var get_response = await axios.get(`http://localhost:4000/users/${Number(token)}`);

            var profile_to_remove = get_response.data.active_profile;

            get_response.data.active_profile = 1;

            const delete_response = await axios.delete(`http://127.0.0.1:8000/profiles/${profile_to_remove}`, config);
            
            const put_response = await axios.put(`http://127.0.0.1:8000/users/${Number(token)}`, get_response.data);

            console.log(delete_response.status);
        } catch (e) {
            console.log(e);
        }

        navigate('/profiles');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.topText}
            onClick={() => handleTitleClick()}>BingusFlix</h1>

            <div className={styles.centralizedBox}>
                <h2 className={styles.topBoxText}>Gerenciar Perfis</h2>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className={styles.formRow}>
                        <img className={styles.formImg} src="/imgs/profile.jpeg" alt="profile image"/>

                        <div className={styles.inputBoxes}>
                            <input className={styles.formInputName} type="text"
                            data-cy="nome"
                            placeholder="Digite o nome do perfil"
                            value = {nickname}
                            onChange = {(e) => setNickname(e.target.value)}
                            required/>

                            <input className={styles.formInputAge} type="text" 
                            data-cy="idade"
                            placeholder="Digite a idade do perfil"
                            value = {age}
                            onChange = {(e) => setAge(e.target.value)}
                            required/>

                            <input className={styles.formInputLanguage} type="text" 
                            data-cy="lingua"
                            placeholder="Digite a lingua do perfil"
                            value = {language}
                            onChange = {(e) => setLanguage(e.target.value)}
                            required/>

                            {error_message && <p data-cy="error-message" className={styles.errorMessage}>{error_message}</p>}
                            {success_message && <p className={styles.success}>{success_message}</p>}

                            <button 
                            type="submit" 
                            data-cy="Atualizar"
                            className={styles.confirmButton}>
                                Atualizar
                            </button>

                        </div>

                    </form>
                </div>
                <button 
                className={styles.removeButton}
                onClick={handleRemove}
                data-cy="Remover">Remover Perfil</button>

            </div>
        </div>
    )
}

export default ManageProfile