import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
} from '@react-email/components';


export default function BetaAcceptanceEmail() {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Welcome to the ProductivityPal Beta</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>You're in! Welcome to the ProductivityPal Beta.</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Ready to Transform Your Workflow?</Heading>
                </Row>
                <Row>
                    <Text>
                        Congratulations! You’ve been accepted into the exclusive ProductivityPal Beta.
                    </Text>
                </Row>
                <Row>
                    <Text>
                        Join thousands of forward-thinking organizations already experiencing the power of ProductivityPal.
                    </Text>
                </Row>
                <Row>
                    <a
                        href={"www.youtube.com/watch?v=dQw4w9WgXcQ"}
                        style={{
                            color: '#fff',
                            backgroundColor: '#007bff',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        Get Started
                    </a>
                </Row>
                <Row>
                    <Text>
                        We’re excited to have you on board!
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}
