/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Socials, SocialList, Reserved, LastWrapper, LastFooter, Href, FooterWrap,
  Container, Heading, Ul, Li, Subtitle,
} from './Footer.style';

function importAll(r) {
  const images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
export default function Footer() {
  const icons = importAll(
    require.context('./assets/social', false, /\.(png|jpe?g|svg)$/),
  );

  return (
    <>
      <LastFooter>
        <LastWrapper>
          <section className="d-flex justify-content-between flex-wrap flex-column flex-md-row">
            <div className="">
              <div className="d-flex align-items-start d-none opacity-0 d-md-block">
                <div>
                  <Heading>Spectrangle</Heading>
                  <Li>
                    © 2021 TalentQL.
                  </Li>
                </div>

              </div>
            </div>
            <div>
              <Reserved>
                © 2022 Dunamis Photography. All rights reserved.
              </Reserved>
            </div>
            <Socials>
              {Object.values(icons).map((icon) => (
                <SocialList key={icon}>
                  <Href href="#">
                    <img src={icon} alt="icon" className="img-fluid" />
                  </Href>
                </SocialList>
              ))}

            </Socials>
          </section>

        </LastWrapper>
      </LastFooter>
    </>
  );
}
