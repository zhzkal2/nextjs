"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/navigation'

export default function AboutUs() {

    // 상태 변수 정의
    interface CompanyInfo {
        concurrentUserCount: number;
        channelName: string;
    }

    const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);  // 회사 정보 저장
    const [loading, setLoading] = useState(false);  // 로딩 상태 관리
    const [error, setError] = useState<Error | null>(null);  // 에러 상태 관리
    const [buttonText, setButtonText] = useState("Get Tabi Info");  // 버튼 텍스트

    // 버튼 클릭 시 실행되는 함수
    const handleClick = () => {
        setLoading(true);  // 요청 시작 전에 로딩 상태 true로 설정
        setButtonText("Loading...");  // 버튼 텍스트를 "Loading..."으로 변경

        // 실제 API 요청 (예시 URL 사용)
        axios.get('http://localhost:8080/test/a6c4ddb09cdb160478996007bff35296')
            .then((response) => {
                setCompanyInfo(response.data);  // 받아온 데이터로 상태 업데이트
                setLoading(false);  // 로딩 상태 false로 변경
                setButtonText("Get Tabi Info");  // 버튼 텍스트 원래대로 변경
            })
            .catch((err) => {
                setError(err);  // 오류 발생 시 에러 상태 설정
                setLoading(false);  // 로딩 상태 false로 변경
                setButtonText("Get Tabi Info");  // 버튼 텍스트 원래대로 변경
            });
    };


    return (
        <div>

            <h1>About Us</h1>

            <button onClick={handleClick} disabled={loading}>
                {buttonText}
            </button>

            {loading && <p>Loading...</p>} {/* 로딩 중일 때 */}
            {error && <p>Error: {error.message}</p>} {/* 오류 발생 시 */}

            {companyInfo && !loading && !error && (
                <div>
                    <h2>{companyInfo.concurrentUserCount}</h2>
                    <p>{companyInfo.channelName}</p>
                </div>
            )}
        </div>
    );
}