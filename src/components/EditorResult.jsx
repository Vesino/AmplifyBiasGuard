import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


// const Warning = () => (
//   <div className="border-b-2 border-brandDark-200 pb-4">
//     <img className="w-16" src="/warning.svg" alt="Warning" />
//     <p className="block text-lg text-brandError-300 font-bold pt-4">¡Cuidado!</p>
//     <p className="block text-lg text-brandError-300 pt-1">Tu texto contiene sesgos de género, lee con cuidado las siguientes recomendaciones para mejorar tu contenido.</p>
//   </div>
// );

const Success = () => (
  <div className="border-b-2 border-brandDark-200 pb-4">
    <div className="flex flex-row justify-between items-center">
      <img className="w-16" src="/trophy.svg" alt="Trophy" />
      <div className="w-16 h-16">
        <CircularProgressbar 
          value={66} 
          text={`${66}%`}
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
);

const EditorResult = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full p-6">
      <Success />
      <div className="grow min-h-0 pt-4">
        <div className="overflow-y-auto h-full pr-2">
          Elit enim cillum ad labore. Eiusmod qui veniam quis do laboris nisi velit pariatur aliqua Lorem ea est fugiat. Laboris in minim Lorem aliqua Lorem dolore proident et ullamco consectetur. Officia nisi non anim aute deserunt cillum nostrud labore adipisicing ad ipsum. Officia enim proident deserunt sit veniam eu reprehenderit anim mollit ipsum. Quis ut velit anim exercitation commodo Lorem esse magna deserunt. Nostrud et quis id mollit mollit consequat commodo exercitation amet labore amet aliquip.
          Reprehenderit deserunt deserunt officia enim id qui anim esse duis eiusmod ut. Quis ad eu et irure dolore veniam et. Elit quis quis enim duis esse. Laboris magna magna consectetur labore veniam laborum cillum. Qui est ut anim fugiat Lorem. Qui culpa quis ad elit dolor et sint. Ea quis exercitation ut officia dolore ea elit culpa qui veniam aute nisi anim.
          Cupidatat adipisicing labore ea eu non elit adipisicing laboris et officia. Aliqua anim nisi nisi do ad magna laborum ad. Non labore qui aliqua velit irure cupidatat.
          Proident velit anim et pariatur sunt duis aliqua ut cupidatat Lorem incididunt. Cillum dolore do consectetur ipsum laboris ad et esse in duis non cupidatat id. Proident eu ipsum ea ea.
          Mollit do culpa id ex laboris ad in sit incididunt ex. Non ullamco laborum consequat reprehenderit et non pariatur mollit anim commodo elit id. Labore reprehenderit minim excepteur reprehenderit occaecat aliquip qui sunt veniam tempor veniam enim minim aute. Culpa labore anim incididunt culpa exercitation adipisicing irure occaecat laborum. Mollit enim veniam excepteur est reprehenderit pariatur culpa mollit culpa. Dolor sit minim cillum et.
          Occaecat sunt cillum aliqua voluptate magna Lorem. Anim laboris labore dolore ut fugiat officia ad esse labore labore officia minim. Est exercitation do veniam nisi quis cupidatat commodo ipsum. Excepteur qui magna officia minim et. Aliquip velit Lorem nostrud nostrud pariatur ex ut ex do ipsum ullamco exercitation ea et.
        </div>
      </div>
    </div>
  );
}

export default EditorResult;
