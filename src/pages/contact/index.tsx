import { Container } from '@/components/custom/misc'
import { Typography, TypographyLead, TypographySm } from '@/components/custom/misc/typography'
import { ContactForm } from './form'
import { IconBrandWhatsapp, IconLocation, IconMail, IconPhone } from '@tabler/icons-react'

export default function Contact() {

  return (
    <div className="w-full flex justify-center mb-10">
      <Container className="bg-slate-100 dark:bg-dark-card rounded-xl mt-8 lg:m-16 lg:p-5">
        <div className="grid lg:grid-cols-5 space-y-8 lg:space-y-0">
          <div className="flex items-center justify-center flex-col lg:col-span-2 lg:w-4/5 space-y-10 mt-10 lg:mt-0 order-2 lg:order-1">
            <div className="w-full lg:w-4/5 pl-3 lg:pl-0">
              <TypographyLead className="font-semibold flex space-x-2 items-center mb-2">
                <IconLocation />
                <span>Address</span>
              </TypographyLead>

              <div className="space-y-2">
                <div className="pl-5">
                  <TypographySm className="">Random address, block 16, Lucky street</TypographySm>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/5 pl-3 lg:pl-0">
              <TypographyLead className="font-semibold flex space-x-2 items-center mb-2">
                <IconPhone />
                <span>Phone numbers</span>
              </TypographyLead>

              <div className="space-y-2">
                <div className="flex items-center space-x-3 pl-5">
                  <a href="tel:+13126196187" className="inline-block">
                    <TypographySm className="">+233 (24) 914 9420</TypographySm>
                  </a>
                </div>
                <div className="flex items-center space-x-3 pl-5">
                  <a href="tel:+13126196187" className="inline-block">
                    <TypographySm className="">+233 (50) 389 4555</TypographySm>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/5 pl-3 lg:pl-0">
              <TypographyLead className="font-semibold flex space-x-2 items-center mb-2">
                <IconMail />
                <span>Email address</span>
              </TypographyLead>

              <a href="mailto:vc.mall@domain.com" className="inline-block">
                <TypographySm className="pl-5">vc.mall@domain.com</TypographySm>
              </a>
            </div>

            <div className="w-full lg:w-4/5 pl-3 lg:pl-0">
              <TypographyLead className="font-semibold flex space-x-2 items-center mb-2">
                <IconBrandWhatsapp />
                <span>WhatsApp chat</span>
              </TypographyLead>
              <a
                href="https://wa.me/+233503894555"
                rel="noreferrer noopener"
                target="_blank"
                className="inline-block"
              >
                <TypographySm className="pl-5">+233 (50) 389 4555</TypographySm>
              </a>
            </div>

          </div>

          <div className="lg:col-span-3 bg-white dark:bg-dark-body rounded-lg py-10 order-1 lg:order-2">
            <ContactForm
              title="Get in touch"
              btnText="Submit"
              className="w-full lg:py-10"
              component={<Typography className="text-color">Send us a message. We would love to hear from you.</Typography>}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
