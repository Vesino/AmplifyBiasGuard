import React from 'react';


const DocumentsProTips = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full p-6">
      <img className="w-16" src="/pro-tips.svg" alt="Pro Tips" />
      <p className="block text-lg font-bold pt-4">Pro Tips:</p>
      <div className="grow min-h-0 pt-4">
        <div className="overflow-y-auto h-full text-justify pr-2">
          <p className="block text-base mt-2">
            <b>1.</b> Convéncete de una vez de que los sesgos existen. Se trata de un tema probado científicamente en incontables análisis y experimentos desde hace ya 40 años, estudiado en muchas disciplinas.
          </p>
          <p className="block text-base mt-2">
            <b>2.</b> Asume que tú también tienes sesgos de género. Da igual que seas hombre o mujer; es probable que tengamos los mismos sesgos.
          </p>
          <p className="block text-base mt-2">
            <b>3.</b> Acepta que no los puedes evitar. La forma en que actúan los sesgos de género es muy parecida a la lectura: si te ponen delante un texto, el que sea, no puedes evitar leerlo; es imposible.
          </p>
          <p className="block text-base mt-2">
            <b>4.</b> Busca tu motivación para actuar sobre ellos. La razón más poderosa para actuar radica en que se trata de lo moral y éticamente correcto.
          </p>
          <p className="block text-base mt-2">
            <b>5.</b> Si puedes, fórmate sobre los sesgos de género.
          </p>
          <p className="block text-base mt-2">
            <b>6.</b> Cambia el género del sujeto: si el sujeto de tu juicio en vez de ser una mujer fuera un hombre, ¿pensarías lo mismo, harías lo mismo? Si ves que cambia tu forma de actuar o de pensar, es un síntoma de que los sesgos están actuando.
          </p>
          <p className="block text-base mt-2">
            <b>7.</b> Examina tu conducta. Merece la pena, en muchas ocasiones, revisar con atención nuestro comportamiento y resultados a lo largo de cierta frecuencia temporal.
          </p>
          <p className="block text-base mt-2">
            <b>8.</b> Cuando veas sesgo de género en acción, dilo. ¿Te has dado cuenta de que no han valorado por igual a esa mujer frente al resto de los hombres? Coméntalo y siembra al menos la duda para volver a revisarlo.
          </p>
          <p className="block text-base mt-2">
           <b>9.</b> Cuando te digan que tú has mostrado sesgos de género, no lo descartes. Los estudios demuestran que somos mejores identificando los sesgos de género de los demás que señalando los nuestros propios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DocumentsProTips;
