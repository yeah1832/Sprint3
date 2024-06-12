import styled from "styled-components";
import Button from "../common/Button";
import DaumPostcode from "react-daum-postcode";
import { useEffect } from "react";

interface Props {
    onCompleted: (address: string) => void;
}

const SCRIPT_URL ="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

function FindAddressButton({onCompleted} : Props){

    //스크립트 로드
    //핸들러
    //입력

    //추후 수정
    const handleOpen = () => {
        new window.daum.Postcode({
            oncompleted: (data: any) => {
                onCompleted(data.address as string);
            },
        }).open();
    };

    useEffect(()=> {
        const script = document.createElement("script"); //<script>
        script.src = SCRIPT_URL;
        script.async = true;
        document.head.appendChild(script); //<head> 태그 안에 <script> 넣기

        return () => {
           document.head.removeChild(script); 
        }
    }, []);


    return(
        <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
            주소 찾기
        </Button>
    );
}

const FindAddressButtonStyle= styled.div``;


export default FindAddressButton;