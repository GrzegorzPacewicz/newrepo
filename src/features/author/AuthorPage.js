import React from "react";
import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph, Link } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Grzegorz Pacewicz"
        body={
          <>
            <Paragraph>
              Cześć, jestem Grzesiek. Mieszkam w Szczytnie. Moją ogromną pasją
              jest <strong>speedcubing</strong>, czyli układanie kostki Rubika
              na czas.{" "}
              <Link
                href="https://www.worldcubeassociation.org/persons/2014PACE01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Do tej pory na zawodach speecubingowych zdobyłem 12 medali 😎.
              </Link>{" "}
            </Paragraph>
            <Paragraph>
              Ze speedcubingiem jestem związany dość mocno, bo do tego prowadzę{" "}
              <Link
                href="https://www.youtube.com/channel/UCAOQlshoDZ8rYCYe-6mqjhw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>kanał na YouTubie</strong> ,
              </Link>{" "}
              organizuję zawody, jestem trenerem oraz członkiem Zarządu Polskiego
              Stowarzyszenia Speedcubingu.
            </Paragraph>
            <Paragraph>
              Od kilku miesięcy uczę się programowania{" "}
              <Link
                href="https://youcode.pl/frontend-developer-od-podstaw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                w kursie dla Frontend Developerów
              </Link>
              , a budowa tej aplikacji jest elementem tego kursu. 😃
            </Paragraph>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
