import React, { Fragment } from 'react';
import { Abaout } from './Abaout';
import { Competence } from './Competence';
import { Contact } from './Contact';
import { Formation } from './Formation';
import { Header } from './Header';
import { Loisir } from './Loisir';
import { Projet } from './Projet';

export const Acceuil = () => {
  return (
    <Fragment>
        <Header/>
        <Abaout/>
        <Formation/>
        <Competence/>
        <Projet/>
        <Contact/>
        <Loisir/>
    </Fragment>
    );
};
