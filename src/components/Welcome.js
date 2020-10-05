import React from 'react';
import '../App.css'

class Welcome extends React.PureComponent {
    render() {
        return (
            <div id="welcome" class="section_container">
                <div class="section_text_container">
                <div class="section_header">
                    <h2>Welcome to YUZEN Translation</h2>
                </div>
                <div class="section_content">
                    <p>With a background in the energy, environment and shipping fields, we deliver professional Japanese to English, and English to Japanese translation. Our translators are bilingual and all possess a sound knowledge of translating techniques and local knowledge to ensure that what is intended in the source text is accurately transcribed to the target text. All of the documents are meticulously proofread by experienced proofreaders. We also offer proofreading exclusively, and presentation coaching in English. Client satisfaction has always been a result of our commitment to delivering high quality work on time. Hence the name of our company YUZEN Translation.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Welcome;