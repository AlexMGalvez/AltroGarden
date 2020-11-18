<template>
  <Layout>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <h1 class="brownText--text">Contact Us</h1>
        <p class="brownText--text">
          Please contact us first by email or form submission below before
          arriving so that we can confirm your order.<br />
        </p>
        <v-icon color="green darken-1" left>mdi-email</v-icon
        ><a href="mailto:AltroGarden@mail.com">AltroGarden@mail.com</a
        ><br /><br />
        <p class="brownText--text">
          We currently do not provide postal delivery because of our limited and
          fast selling stock. For the time being we only sell to customers
          willing to pick up at our store location.<br /><br />
          We are located in Kitchener, Ontario on 30 Dieppe Avenue. N2H 4G1
        </p>
      </v-col>
      <v-col cols="12" md="8">
        <store-map class="storeMap" />
      </v-col>
    </v-row>
    <div class="contactForm">
      <v-row justify="center">
        <v-col sm="9">
          <h1 class="text-center brownText--text">Contact Form</h1>
          <p class="text-center brownText--text">
            If you have any interest in any of our plants or have any questions,
            fill out the form below and you'll receive a response promptly.
          </p>
        </v-col>
      </v-row>
      <form ref="form" @submit.prevent="sendEmail">
        <v-row justify="center">
          <v-col sm="3">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="name"
              required
              name="name"
            ></v-text-field>
          </v-col>
          <v-col sm="3">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              type="email"
              name="email"
            ></v-text-field>
          </v-col>
          <v-col sm="3">
            <v-text-field
              v-model="subject"
              :rules="subjectRules"
              label="Subject"
              required
              type="subject"
              name="subject"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col sm="8">
            <v-textarea
              v-model="message"
              :rules="messageRules"
              color="teal"
              required
              name="message"
              rows="3"
            >
              <template v-slot:label>
                <div>Message</div>
              </template>
            </v-textarea>
          </v-col>
          <v-col sm="1">
            <v-btn type="submit" color="success" class="mr-4">Submit</v-btn>
          </v-col>
        </v-row>
      </form>
    </div>
  </Layout>
</template>

<script>
import emailjs from "emailjs-com";
import StoreMap from "../components/StoreMap.vue";

export default {
  metaInfo: {
    title: "Contact Us",
  },
  components: {
    StoreMap,
  },
  data: () => ({
    valid: false,
    name: "",
    email: "",
    subject: "",
    message: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    subjectRules: [(v) => !!v || "Subject is required"],
    messageRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_oqzssfh",
          "template_akk43nk",
          e.target,
          "user_pKI4L2oq2PTghoyAoFdLt"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      e.target.reset();
      alert(
        "Your message has been sent to Altro Garden. We will get back to you shortly."
      );
    },
  },
};
</script>

<style scoped>
.contactForm {
  padding: 60px 0px 0px 0px;
}
.storeMap {
  min-height: 400px;
}
</style>