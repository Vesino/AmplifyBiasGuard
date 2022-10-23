import React, { useMemo } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Warning = ({ value }) => (
  <>
    <div className="border-b-2 border-brandDark-200 pb-4">
      <div className="flex flex-row justify-between items-center">
        <img className="w-16" src="/warning.svg" alt="Warning" />
        <div className="w-16 h-16">
          <CircularProgressbar 
            value={value} 
            text={`${value}%`}
            styles={buildStyles({
              textColor: "#E66D57",
              pathColor: "#E66D57",
              trailColor: "#F1AB9E",
            })}
          />
        </div>
      </div>
      <p className="block text-lg text-brandError-300 font-bold pt-4">¡Cuidado!</p>
      <p className="block text-lg text-brandError-300 pt-1">Tu texto contiene sesgos de género, lee con cuidado las siguientes recomendaciones para mejorar tu contenido.</p>
    </div>
    <div className="grow min-h-0 pt-4">
      <div className="overflow-y-auto h-full pr-2">
        <p className="block text-base mt-2">
          <b>Asunción de Género:</b> Considera usar pronombres neutrales.
        </p>
        <p className="block text-base mt-2">
          <b>Efecto Halo:</b> Ocurre cuando se observa una característica muy positiva sobre una persona y se permite que esta afecte la valoración general de la persona, impidiendo que se analice a profundidad su potencial.
        </p>
        <p className="block text-base mt-2">
          <b>Efecto Horns:</b> Es lo contrario al anterior. Se presenta cuando se percibe una característica como negativa y esta nubla la valoración general del perfil, al punto de no permitir analizar otros posibles atributos del candidato.
        </p>
        <p className="block text-base mt-2">
          <b>Prejuicios y Estereotipos:</b> Las investigaciones han ratificado el papel que tienen características demográficas, como género, raza o atributos físicos. Estos no son sesgos uniformes, lo que significa que pueden estar más o menos acentuados e incluso, según la cultura de cada país.
        </p>
      </div>
    </div>
  </>
);

const Success = ({ value }) => (
  <>
    <div className="border-b-2 border-brandDark-200 pb-4">
      <div className="flex flex-row justify-between items-center">
        <img className="w-16" src="/trophy.svg" alt="Trophy" />
        <div className="w-16 h-16">
          <CircularProgressbar
            value={value} 
            text={`${value}%`}
            styles={buildStyles({
              textColor: "#7ED957",
              pathColor: "#7ED957",
              trailColor: "B1E89A",
            })}
          />
        </div>
      </div>
      <p className="block text-lg text-brandGreen-300 font-bold pt-4">¡Buen trabajo!</p>
      <p className="block text-lg text-brandGreen-300 pt-1">Tu contenido no contiene sesgos de género.</p>
    </div>
    <div className="grow min-h-0 pt-4">
      <div className="flex flex-col justify-center aling-center h-full">
        <img className="w-20" src="/biasguard.png" alt="Biasguard" />
      </div>
    </div>
  </>
);

const ShowResult = ({ result }) => {
  const [key, value] = result[0];
  const finalValue = ~~(Number(value) * 100);
  if (key === 'neutral') {
    return <Success value={finalValue} />
  }
  return <Warning value={finalValue} />
}

const EditorResult = ({ result }) => {

  const resultParsed = useMemo(() => {
    if (!result) {
      return null;
    }
    return Object.entries(result);
  }, [result]);

  return (
    <div className="flex flex-col justify-start w-full h-full p-6">
      { !!resultParsed ? (
        <ShowResult result={resultParsed} />
      ) : (
        <p>Este documento no ha sido analizado</p>
      )}
    </div>
  );
}

export default EditorResult;
