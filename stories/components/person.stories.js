/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { html } from 'lit-element';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withWebComponentsKnobs } from 'storybook-addon-web-components-knobs';
import { withSignIn } from '../../.storybook/addons/signInAddon/signInAddon';
import { withCodeEditor } from '../../.storybook/addons/codeEditorAddon/codeAddon';
import '../../packages/mgt/dist/es6/components/mgt-person/mgt-person';

export default {
  title: 'Components | mgt-person',
  component: 'mgt-person',
  decorators: [withA11y, withSignIn, withCodeEditor],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } }
};

export const person = () => html`
  <mgt-person person-query="me" view="twoLines"></mgt-person>
`;

export const personPhotoOnly = () => html`
  <mgt-person person-query="me"></mgt-person>
`;

export const personPresence = () => html`
  <mgt-person person-query="me" show-presence view="twoLines"></mgt-person>
`;

export const personPresenceDisplayAll = () => html`
  <script>
    const online = {
      activity: 'Available',
      availability: 'Available',
      id: null
    };
    const onlineOof = {
      activity: 'OutOfOffice',
      availability: 'Available',
      id: null
    };
    const busy = {
      activity: 'Busy',
      availability: 'Busy',
      id: null
    };
    const busyOof = {
      activity: 'OutOfOffice',
      availability: 'Busy',
      id: null
    };
    const dnd = {
      activity: 'DoNotDisturb',
      availability: 'DoNotDisturb',
      id: null
    };
    const dndOof = {
      activity: 'OutOfOffice',
      availability: 'DoNotDisturb',
      id: null
    };
    const away = {
      activity: 'Away',
      availability: 'Away',
      id: null
    };
    const oof = {
      activity: 'OutOfOffice',
      availability: 'Offline',
      id: null
    };
    const offline = {
      activity: 'Offline',
      availability: 'Offline',
      id: null
    };

    const onlinePerson = document.getElementById('online');
    const onlineOofPerson = document.getElementById('onlineOof');
    const busyPerson = document.getElementById('busy');
    const busyOofPerson = document.getElementById('busyOof');
    const dndPerson = document.getElementById('dnd');
    const dndOofPerson = document.getElementById('dndOof');
    const awayPerson = document.getElementById('away');
    const oofPerson = document.getElementById('oof');
    const onlinePersonSmall = document.getElementById('online-small');
    const onlineOofPersonSmall = document.getElementById('onlineOof-small');
    const busyPersonSmall = document.getElementById('busy-small');
    const busyOofPersonSmall = document.getElementById('busyOof-small');
    const dndPersonSmall = document.getElementById('dnd-small');
    const dndOofPersonSmall = document.getElementById('dndOof-small');
    const awayPersonSmall = document.getElementById('away-small');
    const oofPersonSmall = document.getElementById('oof-small');

    onlinePerson.personPresence = online;
    onlineOofPerson.personPresence = onlineOof;
    busyPerson.personPresence = busy;
    busyOofPerson.personPresence = busyOof;
    dndPerson.personPresence = dnd;
    dndOofPerson.personPresence = dndOof;
    awayPerson.personPresence = away;
    oofPerson.personPresence = oof;
    onlinePersonSmall.personPresence = online;
    onlineOofPersonSmall.personPresence = onlineOof;
    busyPersonSmall.personPresence = busy;
    busyOofPersonSmall.personPresence = busyOof;
    dndPersonSmall.personPresence = dnd;
    dndOofPersonSmall.personPresence = dndOof;
    awayPersonSmall.personPresence = away;
    oofPersonSmall.personPresence = oof;
  </script>
  <style>
    mgt-person {
      display: block;
      margin: 12px;
    }
    mgt-person.small {
      display: inline-block;
      margin: 5px 0 0 10px;
    }
    .title {
      font-family: 'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto,
        'Helvetica Neue', sans-serif;
      display: block;
      padding: 5px;
      font-size: 20px;
      margin: 10px 0 10px 0;
    }
    .title span {
      border-bottom: 1px solid #8a8886;
      padding-bottom: 5px;
    }
  </style>
  <div class="title"><span>Presence badge on big avatars: </span></div>
  <mgt-person id="online" person-query="me" show-presence view="twoLines"></mgt-person>
  <mgt-person id="onlineOof" person-query="Isaiah Langer" show-presence view="twoLines"></mgt-person>
  <mgt-person id="busy" person-query="bobk@tailspintoys.com" show-presence view="twoLines"></mgt-person>
  <mgt-person id="busyOof" person-query="Diego Siciliani" show-presence view="twoLines"></mgt-person>
  <mgt-person id="dnd" person-query="Lynne Robbins" show-presence view="twoLines"></mgt-person>
  <mgt-person id="dndOof" person-query="EmilyB" show-presence view="twoLines"></mgt-person>
  <mgt-person id="away" person-query="BrianJ" show-presence view="twoLines"></mgt-person>
  <mgt-person id="oof" person-query="JoniS@M365x214355.onmicrosoft.com" show-presence view="twoLines"></mgt-person>
  <div class="title"><span>Presence badge on small avatars: </span></div>
  <mgt-person class="small" id="online-small" person-query="me" show-presence></mgt-person>
  <mgt-person class="small" id="onlineOof-small" person-query="Isaiah Langer" show-presence></mgt-person>
  <mgt-person class="small" id="busy-small" person-query="bobk@tailspintoys.com" show-presence></mgt-person>
  <mgt-person class="small" id="busyOof-small" person-query="Diego Siciliani" show-presence></mgt-person>
  <mgt-person class="small" id="dnd-small" person-query="Lynne Robbins" show-presence></mgt-person>
  <mgt-person class="small" id="dndOof-small" person-query="EmilyB" show-presence></mgt-person>
  <mgt-person class="small" id="away-small" person-query="BrianJ" show-presence></mgt-person>
  <mgt-person class="small" id="oof-small" person-query="JoniS@M365x214355.onmicrosoft.com" show-presence></mgt-person>
`;

export const darkMode = () => html`
  <div class="title"><span>Transparent presence badge background:</span></div>
  <mgt-person person-query="me" view="twoLines" show-presence></mgt-person>
  <div class="title"><span>Light presence icon:</span></div>
  <mgt-person id="online" person-query="Isaiah Langer" show-presence view="twoLines"></mgt-person>
  <div class="title"><span>Dark presence icon:</span></div>
  <mgt-person id="dnd" person-query="Lynne Robbins" show-presence view="twoLines"></mgt-person>

  <script>
    const online = {
      activity: 'Available',
      availability: 'Available',
      id: null
    };
    const dnd = {
      activity: 'DoNotDisturb',
      availability: 'DoNotDisturb',
      id: null
    };
    const onlinePerson = document.getElementById('online');
    const dndPerson = document.getElementById('dnd');

    onlinePerson.personPresence = online;
    dndPerson.personPresence = dnd;
  </script>

  <style>
    .story-mgt-preview-wrapper {
      background-color: black;
    }
    mgt-person {
      --color: white;
      --presence-background-color: black;
    }
    .title {
      color: white;
      display: block;
      padding: 5px;
      font-size: 20px;
      margin: 10px 0 10px 0;
    }
    .title span {
      border-bottom: 1px solid #8a8886;
      padding-bottom: 5px;
    }
    #dnd {
      --presence-icon-color: black;
    }
  </style>
`;

export const personCardHover = () => html`
  <mgt-person person-query="me" person-card="hover"></mgt-person>
`;

export const personCardClick = () => html`
  <mgt-person person-query="me" person-card="click"></mgt-person>
`;

export const setPersonDetails = () => html`
  <mgt-person class="my-person" view="twoLines" line2-property="title" person-card="hover"> </mgt-person>
  <script>
    const person = document.querySelector('.my-person');

    person.personDetails = {
      displayName: 'Megan Bowen',
      title: 'CEO',
      mail: 'megan@contoso.com'
    };

    // set image
    person.personImage = '';
  </script>
`;

export const moreExamples = () => html`
  <style>
    .example {
      margin-bottom: 20px;
    }

    .styled-person {
      --font-family: 'Comic Sans MS', cursive, sans-serif;
      --color: red;
      --avatar-size: 60px;
      --font-size: 20px;
      --line2-color: green;
      --avatar-border-radius: 10% 35%;
      --line2-text-transform: uppercase;
    }

    .person-initials {
      --initials-color: yellow;
      --initials-background-color: red;
      --avatar-size: 60px;
      --avatar-border-radius: 10% 35%;
    }
  </style>

  <div class="example">
    <span>Default person</span>
    <mgt-person person-query="me"></mgt-person>
  </div>

  <div class="example">
    <span>One line</span>
    <mgt-person person-query="me" view="oneline"></mgt-person>
  </div>

  <div class="example">
    <span>Two lines</span>
    <mgt-person person-query="me" view="twoLines"></mgt-person>
  </div>

  <div class="example">
    <span>Change line content</span>
    <!--add fallback property by comma separating-->
    <mgt-person
      person-query="me"
      line1-property="givenName"
      line2-property="jobTitle,mail"
      view="twoLines"
    ></mgt-person>
  </div>

  <div class="example">
    <span>Large avatar</span>
    <mgt-person person-query="me" avatar-size="large"></mgt-person>
  </div>

  <div class="example">
    <span>Different styles (see css tab for style)</span>
    <mgt-person class="styled-person" person-query="me" view="twoLines"></mgt-person>
  </div>

  <div class="example" style="width: 200px">
    <span>Overflow</span>
    <mgt-person person-query="me" view="twoLines"></mgt-person>
  </div>

  <div class="example">
    <span>No data template</span>
    <mgt-person>
      <template data-type="no-data">
        <div>No person</div>
      </template>
    </mgt-person>
  </div>

  <div class="example">
    <span>Person card</span>
    <mgt-person person-query="me" view="twoLines" person-card="hover"></mgt-person>
  </div>

  <div class="example">
    <span>Style initials (see css tab for style)</span>
    <mgt-person class="person-initials" person-query="alex@fineartschool.net" view="oneline"></mgt-person>
  </div>

  <div class="example">
    <span>DEPRECATED (show-name, show-email)</span>
    <mgt-person person-query="me"></mgt-person>
    <mgt-person person-query="me" show-name></mgt-person>
    <mgt-person person-query="me" show-email></mgt-person>
    <mgt-person person-query="me" show-name show-email></mgt-person>
  </div>
`;
