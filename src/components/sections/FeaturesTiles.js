import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Pasatelo genial jugando con tus amigos',
    paragraph: 'Bueno en realidad con tus amigos no, solo va a ser con uno, pero va a ser el mejor. EL GRAN IVANPOTATO.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/clock.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Horas de diversión
                    </h4>
                  <p className="m-0 text-sm">
                    Por si no jugabas lo suficiente durante el dia ahora podrás malgastar tu tiempo con otro juego más!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/avatar.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Nuevas amistades
                    </h4>
                  <p className="m-0 text-sm">
                    A ver es un mmo, jugarás con otra gente y tal. O sea aparte de con el increible Ivanpotato claro está!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/musical-note.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Toca la flauta
                    </h4>
                  <p className="m-0 text-sm">
                    Literal hay una clase con la que puedes usar como 20 instrumentos y está tope de guapa. Se puede tocar la canción de Naruto! El gran Ivanpotato te lo puede demostrar!
                    </p>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;