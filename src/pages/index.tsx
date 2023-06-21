import React from 'react';
import getConfig from "next/config";
import {GetServerSideProps} from "next";

const {serverRuntimeConfig,publicRuntimeConfig} = getConfig()

const Index = ({appName}:any) => {
    return (
        <div>
          <h1>Server Side Only : {appName}</h1>
          <h1>Server Side And Client Side : {publicRuntimeConfig.appNameClient}</h1>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const appName = serverRuntimeConfig.appName
    return {
        props: {
            appName
        }
    }
}

export default Index;
