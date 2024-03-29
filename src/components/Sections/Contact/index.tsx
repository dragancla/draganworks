import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import GithubIcon from '../../Icon/GithubIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex gap-6 justify-center md:items-center">
        <EnvelopeIcon className="hidden h-16 w-16 text-white md:block" />
        <h2 className="text-2xl font-bold text-white">{headerText}</h2>
      </div>
      <div className="flex gap-6 justify-center md:flex-row md:items-center">
        <div className="flex flex-col gap-y-7 md:items-center">
          <p className="prose leading-7 text-neutral-300">{description}</p>
          <dl className="flex flex-col space-y-7 text-base text-neutral-500 sm:space-y-2">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd className="flex items-center">
                    <a
                      className={classNames(
                        '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                        {'hover:text-white': href},
                      )}
                      href={href}
                      target="_blank">
                      <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                      <span className="ml-3 text-sm sm:text-base">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
