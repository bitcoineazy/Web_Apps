import React from 'react';
import meatBalls from './images/pexels-gary-barnes.jpg';
import './App1.css'

const App1 = () => {
  return (
      <div id={"meatballs-page"} className={"meatballs"}>
        <div className={"meatballs-content"}>
          <section className={"meatballs-content-section-preview"}>
            <div className={"meatballs-content-section-preview-content"}>
              <div className={"meatballs-preview-image"} style={{backgroundImage: `url(${meatBalls})`}}>
                <div className={"meatballs-preview-image-text"}>
                  <div className={"meatballs-preview-image-text-title"}>
                    <h1 className={"meatballs-h1"}>Фрикадельки – блюдо с историей</h1>
                  </div>
                  <div className={"meatballs-preview-image-text-meta"}>
                    <time>
                      04.04.2022
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={"meatballs-content-section-text"}>
            <div className={"text"}>
              <p>Что вы знаете о фрикадельках, кроме того, что это вкусно и сытно? А им есть что рассказать о себе.</p>
              <p>Фрикадельки нашли себе место во многих кухнях мира еще с незапамятных времен.
                Говорят, что это блюдо было изобретено около двух тысячелетий назад.
                За время своего существования фрикадельки претерпели большие трансформации: их варили в бульоне,
                жарили, делали с хлебом и яйцом, подавали как соусом, так и без. В наше время мясные шарики могут
                быть созданы из растительного мяса, поэтому их обожают люди с разными предпочтениями в питании.</p>
              <p>Фрикадельки любили и умели готовить даже древние римляне, причем они считались блюдом для
                привилегированных жителей и ассоциировались с изобилием. На Пиренейский полуостров их
                привезли арабы, а испанцы с удовольствием подхватили традицию. В Древней Персии блюдо
                из рубленого мяса носило название кюфте и считалось блюдом бедняков. Теперь кюфте является
                традиционным блюдом Турции. В Россию же фрикадельки пришли вместе с Петром Первым.</p>
              <p>Любопытные факты о фрикадельках:</p>
              <p>— В средние века их делали не только из мяса.
                Особой популярностью пользовались рыбные фрикадельки,
                которые добавляли в разные виды супов.</p>
              <p>— Страна, которая имеет больше всего вариаций фрикаделек – это Турция.
                Турки подсчитали, что готовят более 100 видов различных мясных шариков (кюфте или кёфте).</p>
              <p>— В мясные шарики во в многих странах мира любят добавлять хлеб, замоченный в молоке.</p>
              <p>— Рекордов в приготовлении этого мясного блюда достаточно много.
                В Италии гордятся своим рекордом, вошедшим в книгу рекордов Гиннеса
                – фрикаделькой весом 471 килограмм. А самые дорогие фрикадельки в
                мире подавались в нью-йоркском ресторане за 4500 долларов и были синего цвета.</p>
              <p>
                Текст: Аделя Гарифзянова
              </p>
            </div>
          </section>
        </div>
      </div>
  );
};

export default App1;