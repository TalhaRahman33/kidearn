import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
const NewDetail1 = () => {
  return (
    <>
  <section className="page-header" style={{ position: "relative" }}>
      <div className="page-header__bg-news" />    <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.5s ease',
        zIndex: 0,
      }} />
        {/* /.page-header__bg */}
        <div className="container">
          <h2 className="page-header__title">تفاصيل الموضوع</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <Link href="/">الصفحة الرئيسية</Link>
            </li>
            <li>
              <span>تفاصيل الموضوع</span>
            </li>
          </ul>
          {/* /.thm-breadcrumb list-unstyled */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-header */}
      <section className="blog-one blog-one--page">
        <div className="container">
          <div className="row gutter-y-60">
            {/* /.col-lg-4 */}
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="blog-card blog-card-two @@extraClassName">
                  <div className="blog-card__image">
                    <ExportedImage
                      unoptimized={true}
                      width={200}
                      height={500}
                      src="/images/blog-l-1-2.png"
                      alt="The Complete Web Developer Guideline 2023"
                    />
                  </div>
                  {/* /.blog-card__image */}
                  <div className="blog-card__content">
                    <div className="blog-card__content__top">
                      <div className="blog-card__date">
                        <i className="icon-clock" />٢ أكتوبر ٢٠٢٤
                      </div>
                      {/* /.blog-card__date */}
                    </div>
                    {/* /.blog-card__content__top */}
                    <h3 className="blog-card__title">تطور اللغة</h3>
                    {/* /.blog-card__title */}
                    <p className="blog-card-two__text">
                      مراحل النطق للأطفال تطرب آذان الآباء لسماع الكلمات الأولى
                      لأطفالهم الرُضع. ولكن كيف يمكنك معرفة ما إذا كان نطق طفلك
                      وقدرته على التحدث يسيران على المسار الصحيح؟ يتعلم الأطفال
                      التحدث بوتيرتهم الخاصة. لكن يمكن الاسترشاد بالمؤشرات التي
                      تميز كل مرحلة على حدة لقياس قدرة الطفل على التحدث. ومؤشرات
                      المراحل هذه تساعد الأطباء على تحديد مدى احتياج الطفل إلى
                      مساعدة إضافية. بعد بلوغ الطفل 3 شهور
                    </p>
                    <h5>بعد بلوغ طفلك ثلاثة أشهُر، يمكنه أن:</h5>
                    <ul>
                      <li>١. يبتسم عند ظهورك.</li>
                      <li>٢. يصدر أصواتًا منغّمة.</li>
                      <li>٣. يهدأ أو يبتسم عند الحديث معه.</li>
                      <li>٤. يبدو وكأنه يعرف صوتك.</li>
                      <li>٥. يبكي بأنماط مختلفة للتعبير عن احتياجاته المختلفة.</li>
                    </ul>
                    <p>
                      بنهاية مرحلة الستة أشهر الأولى يمكن للطفل عند بلوغه ستة
                      أشهر:
                    </p>
                    <ul>
                      <li>١. إصدار أصوات قرقرة عند اللعب.</li>
                      <li>٢. إصدار أصوات غير مفهومة ومجموعة من الأصوات.</li>
                      <li>٣. استخدام الصوت للتعبير عن الإعجاب أو الاستهجان.</li>
                      <li>٤. تحريك عينيه تجاه الأصوات.</li>
                      <li>٥. الاستجابة للتغيُّرات التي تحدث في نبرة صوتك.</li>
                      <li>٦. الانتباه إلى أن بعض الألعاب تصدر أصواتًا.</li>
                      <li>٧. الانتباه إلى الموسيقى.</li>
                    </ul>

                    <p>بعد بلوغ 12 شهرًا يمكن للطفل بعد بلوغه 12 شهرًا:</p>
                    <ul>
                      <li>١. محاولة محاكاة أصوات الكلام.</li>
                      <li>٢. نطق كلمات قليلة مثل "بابا" أو "ماما" أو "أه-أوه".</li>
                      <li>٣. فهم الأوامر البسيطة، مثل "تعالَ هنا".</li>
                      <li>٤. معرفة الكلمات التي تُطلق على الأشياء المعروفة، مثل
                        "حذاء".</li>
                      <li>٥. الالتفات للنظر نحو الأصوات.</li>
                    </ul>

                    <p>بعد بلوغ الطفل 18 شهرًا يمكن للطفل بعد بلوغه 18 شهرًا:</p>
                    <ul>
                      <li>١. معرفة أسماء الأشخاص والأشياء وأجزاء الجسم.</li>
                      <li>٢. تنفيذ الأوامر البسيطة التي تُعطى إليه بالإشارة.</li>
                      <li>٣. نطق ما يصل إلى 10 كلمات.</li>
                    </ul>

                    <p>بعد بلوغ الطفل 24 شهرًا يمكن للطفل بعد بلوغه 24 شهرًا:</p>
                    <ul>
                      <li>١. استخدام عبارات بسيطة، مثل "المزيد من الحليب".</li>
                      <li>٢. طرح أسئلة مكوَّنة من كلمة إلى كلمتين، مثل "نذهب
                        للخارج؟".</li>
                      <li>٣. تنفيذ الأوامر البسيطة وفهم الأسئلة البسيطة.</li>
                      <li>٤. نطق نحو 50 كلمة أو أكثر.</li>
                      <li>٥. الحديث بطريقة سليمة تفهمها أنت أو غيرك من مقدمي الرعاية
                        في نصف عدد المرات على الأقل.</li>
                    </ul>

                    <p>
                      متى تنبغي استشارة طبيب الطفل إذا كنت تشعر بالقلق من إصابة
                      طفلك بتأخر الكلام، فتحدث مع طبيبه. ويحدث تأخر الكلام لعدة
                      أسباب تشمل فقدان السمع وغيره من مشكلات النمو. يمكن أن
                      يحيلك طبيب طفلك إلى اختصاصي السمعيات أو اختصاصي أمراض
                      اللغة والتخاطب.
                    </p>
                    <p>
                      إذا كان طفلك يسمع لغتَين أو يتحدث بلغتَين، فيمكن أن يجري
                      اختصاصي في أمراض اللغة والتخاطب اختبارًا له في اللغتَين
                      كلتيهما.
                    </p>
                    <p>
                      تحدث مع طفلك لمساعدته على الكلام. ويمكنك الحديث معه عما
                      تفعله والأماكن التي تذهب إليها، أو يمكنك أن تغنّي له أو
                      تروي له القصص أو تعُدان الأرقام معًا. وعلِّم طفلك كيف
                      يحاكي الأفعال كالتصفيق وإصدار أصوات الحيوانات.
                    </p>
                    <p>
                      أظهِر لطفلك سعادتك عندما يتحدث، وكرِّر الأصوات التي
                      يصدرها، فلا بأس بشيء من الكلام بطريقة طفولية. لكن ينبغي
                      الانتباه إلى أن طفلك يتعلم الكلام عن طريق تقليدك.
                    </p>
                  </div>
                  {/* /.blog-card__content */}
                </div>
              </div>
            </div>
            {/* /.col-lg-8 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.blog-one blog-one--page */}
    </>
  );
};

export default NewDetail1;

// import React from "react";
// import ExportedImage from "next-image-export-optimizer";
// const NewDetail1 = () => {
//   return (
//     <>
//       <section className="page-header">
//         <div className="page-header__bg" />
//         {/* /.page-header__bg */}
//         <div className="container">
//           <h2 className="page-header__title">تفاصيل الموضوع</h2>
//           <ul className="kidearn-breadcrumb list-unstyled">
//             <li>
//               <Link href="/">الصفحة الرئيسية</Link>
//             </li>
//             <li>
//               <span>تفاصيل الموضوع</span>
//             </li>
//           </ul>
//           {/* /.thm-breadcrumb list-unstyled */}
//         </div>
//         {/* /.container */}
//       </section>
//       {/* /.page-header */}
//       <section className="blog-one blog-one--page">
//         <div className="container">
//           <div className="row gutter-y-60">
//             {/* /.col-lg-4 */}
//             <div className="col-lg-8">
//               <div className="blog-details">
//                 <div className="blog-card blog-card-two @@extraClassName">
//                   <div className="blog-card__image">
//                     <ExportedImage
//                       unoptimized={true}
//                       width={200}
//                       height={500}
//                       src="/images/blog-l-1-1.jpg"
//                       alt="The Complete Web Developer Guideline 2023"
//                     />
//                   </div>
//                   {/* /.blog-card__image */}
//                   <div className="blog-card__content">
//                     <div className="blog-card__content__top">
//                       {/* <Link href="#" className="blog-card__category">
//                       Kindergarten
//                     </Link> */}
//                       <div className="blog-card__date">
//                         <i className="icon-clock" />٢ أكتوبر ٢٠٢٤
//                       </div>
//                       {/* /.blog-card__date */}
//                     </div>
//                     {/* /.blog-card__content__top */}
//                     <h3 className="blog-card__title">تطور اللغة</h3>
//                     {/* /.blog-card__title */}
//                     <p className="blog-card-two__text">
//                       مراحل النطق للأطفال تطرب آذان الآباء لسماع الكلمات الأولى
//                       لأطفالهم الرُضع. ولكن كيف يمكنك معرفة ما إذا كان نطق طفلك
//                       وقدرته على التحدث يسيران على المسار الصحيح؟ يتعلم الأطفال
//                       التحدث بوتيرتهم الخاصة. لكن يمكن الاسترشاد بالمؤشرات التي
//                       تميز كل مرحلة على حدة لقياس قدرة الطفل على التحدث. ومؤشرات
//                       المراحل هذه تساعد الأطباء على تحديد مدى احتياج الطفل إلى
//                       مساعدة إضافية. بعد بلوغ الطفل 3 شهور
//                     </p>
//                     <h5>بعد بلوغ طفلك ثلاثة أشهُر، يمكنه أن:</h5>
//                     <ul>
//                       <li>يبتسم عند ظهورك.</li>
//                       <li>يصدر أصواتًا منغّمة.</li>
//                       <li>يهدأ أو يبتسم عند الحديث معه.</li>
//                       <li>يبدو وكأنه يعرف صوتك.</li>
//                       <li>يبكي بأنماط مختلفة للتعبير عن احتياجاته المختلفة.</li>
//                     </ul>
//                     <p>
//                       بنهاية مرحلة الستة أشهر الأولى يمكن للطفل عند بلوغه ستة
//                       أشهر:
//                     </p>
//                     <ul>
//                       <li>إصدار أصوات قرقرة عند اللعب.</li>
//                       <li>إصدار أصوات غير مفهومة ومجموعة من الأصوات.</li>
//                       <li>استخدام الصوت للتعبير عن الإعجاب أو الاستهجان.</li>
//                       <li>تحريك عينيه تجاه الأصوات.</li>
//                       <li>الاستجابة للتغيُّرات التي تحدث في نبرة صوتك.</li>
//                       <li>الانتباه إلى أن بعض الألعاب تصدر أصواتًا.</li>
//                       <li>الانتباه إلى الموسيقى.</li>
//                     </ul>

//                     <p>بعد بلوغ 12 شهرًا يمكن للطفل بعد بلوغه 12 شهرًا:</p>
//                     <ul>
//                       <li>محاولة محاكاة أصوات الكلام.</li>
//                       <li>نطق كلمات قليلة مثل "بابا" أو "ماما" أو "أه-أوه".</li>
//                       <li>فهم الأوامر البسيطة، مثل "تعالَ هنا".</li>
//                       <li>
//                         معرفة الكلمات التي تُطلق على الأشياء المعروفة، مثل
//                         "حذاء".
//                       </li>
//                       <li>الالتفات للنظر نحو الأصوات.</li>
//                     </ul>

//                     <p>
//                       بعد بلوغ الطفل 18 شهرًا يمكن للطفل بعد بلوغه 18 شهرًا:
//                     </p>
//                     <ul>
//                       <li>معرفة أسماء الأشخاص والأشياء وأجزاء الجسم.</li>
//                       <li>تنفيذ الأوامر البسيطة التي تُعطى إليه بالإشارة.</li>
//                       <li>نطق ما يصل إلى 10 كلمات.</li>
//                     </ul>

//                     <p>
//                       بعد بلوغ الطفل 24 شهرًا يمكن للطفل بعد بلوغه 24 شهرًا:
//                     </p>
//                     <ul>
//                       <li>استخدام عبارات بسيطة، مثل "المزيد من الحليب".</li>
//                       <li>
//                         طرح أسئلة مكوَّنة من كلمة إلى كلمتين، مثل "نذهب
//                         للخارج؟".
//                       </li>
//                       <li>تنفيذ الأوامر البسيطة وفهم الأسئلة البسيطة.</li>
//                       <li>نطق نحو 50 كلمة أو أكثر.</li>
//                       <li>
//                         الحديث بطريقة سليمة تفهمها أنت أو غيرك من مقدمي الرعاية
//                         في نصف عدد المرات على الأقل.
//                       </li>
//                     </ul>

//                     <p>
//                       متى تنبغي استشارة طبيب الطفل إذا كنت تشعر بالقلق من إصابة
//                       طفلك بتأخر الكلام، فتحدث مع طبيبه. ويحدث تأخر الكلام لعدة
//                       أسباب تشمل فقدان السمع وغيره من مشكلات النمو. يمكن أن
//                       يحيلك طبيب طفلك إلى اختصاصي السمعيات أو اختصاصي أمراض
//                       اللغة والتخاطب.
//                     </p>
//                     <p>
//                       إذا كان طفلك يسمع لغتَين أو يتحدث بلغتَين، فيمكن أن يجري
//                       اختصاصي في أمراض اللغة والتخاطب اختبارًا له في اللغتَين
//                       كلتيهما.
//                     </p>
//                     <p>
//                       تحدث مع طفلك لمساعدته على الكلام. ويمكنك الحديث معه عما
//                       تفعله والأماكن التي تذهب إليها، أو يمكنك أن تغنّي له أو
//                       تروي له القصص أو تعُدان الأرقام معًا. وعلِّم طفلك كيف
//                       يحاكي الأفعال كالتصفيق وإصدار أصوات الحيوانات.
//                     </p>
//                     <p>
//                       أظهِر لطفلك سعادتك عندما يتحدث، وكرِّر الأصوات التي
//                       يصدرها، فلا بأس بشيء من الكلام بطريقة طفولية. لكن ينبغي
//                       الانتباه إلى أن طفلك يتعلم الكلام عن طريق تقليدك.
//                     </p>
//                   </div>
//                   {/* /.blog-card__content */}
//                 </div>
//               </div>
//             </div>
//             {/* /.col-lg-8 */}
//           </div>
//           {/* /.row */}
//         </div>
//         {/* /.container */}
//       </section>
//       {/* /.blog-one blog-one--page */}
//     </>
//   );
// };

// export default NewDetail1;
