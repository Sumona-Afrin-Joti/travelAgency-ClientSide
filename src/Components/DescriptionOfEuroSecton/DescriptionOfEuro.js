import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import img from '../../images/under-banner-section-img.jpg';
import './DescriptionOfEuro.css';
const DescriptionOfEuro = () => {
  return (
    <div>
      <Container className="mt-5">
        <h6 className='description-title'>There simply is no way to tour Europe and not be awestruck by its scenic beauty, epic history and dazzling artistic and culinary diversity. </h6>
        <Row className="mt-5">
          <Col md={3} xs={12}>
            <img className="description-img" src={img} alt="" />
          </Col>
          <Col md={9} xs={12} className="ps-">
            <Stack gap={2} className="description" >
              <p>Europe’s almost unmanageable wealth of attractions is its biggest single draw: the birthplace of democracy in Athens, the Renaissance art of Florence, the graceful canals of Venice, the Napoleonic splendour of Paris, and the multilayered historical and cultural canvas of London. Less obvious but no less impressive attractions include Moorish palaces in Andalucía, the fascinating East-meets-West brew of İstanbul in Turkey, the majesty of meticulously restored imperial palaces in Russia’s former capital St Petersburg and the ongoing project of Gaudí’s La Sagrada Família in Barcelona.</p>

              <p>There’s a huge diversity of natural scenery: rugged Scottish Highlands with glens and lochs; Norway’s fabulous fjords, seemingly chipped to jagged perfection by giants; the vine-raked valleys of the Loire; and the steppe-like plains of central Spain. If you’re looking for beaches, a circuit of the Mediterranean’s northern coast reveals one gem after another. Or strike out to lesser known, yet beautiful coastal regions such as the Baltic and Black Seas. Mountain lovers should head to the Alps: they march across central Europe taking in France, Switzerland, Austria, northern Italy and tiny Liechtenstein.</p>

              <p>Europe has some of the best nightlife in the world. Globally famous DJs keep the party going in London, Berlin and Paris, all of which also offer top-class entertainment, especially theatre and live music. Other key locations for high-energy nightlife include Moscow, Belgrade, Budapest and Madrid, while those hankering for something cosier can add Dublin’s pubs or Vienna’s cafes to their itinerary. Continue to party on the continent’s streets at a multiplicity of festivals and celebrations, from city parades attended by hundreds of thousands to intimate concerts in an ancient amphitheatre.</p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col className="euro-description">Once you’ve ticked off the great museums, panoramic vistas and energetic nightlife, what’s left? A chance to indulge in a culinary adventure to beat all others, that’s what! Who wouldn’t want to snack on pizza in Naples, souvlaki in Santorini or even haggis in Scotland? But did you also know that Britain has some of the best Indian restaurants in the world; that Turkey’s doner kebab is a key part of contemporary German food culture; and that in the Netherlands you can gorge on an Indonesian rijsttafel (rice table)? Once again Europe’s diversity and global reach is its trump card.</Col>
        </Row>
      </Container>

    </div>
  );
};

export default DescriptionOfEuro;
