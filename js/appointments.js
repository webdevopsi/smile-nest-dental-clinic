/* =========================================================
   SMILE NEST DENTAL CLINIC
   Appointment Actions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const clinicPhone = "9496041577";

    const whatsappNumber = "919496041577";

    const clinicEmail = "smilenestdentalclinic@gmail.com";


    /* =====================================================
       WHATSAPP APPOINTMENT
       ===================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            '[data-appointment="whatsapp"]'
        );


    whatsappButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const message =
                "Hello Smile Nest Dental Clinic,\n\n" +
                "I would like to book an appointment.\n\n" +
                "Please let me know the available appointment timings.";

            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });


    /* =====================================================
       CALL NOW
       ===================================================== */

    const callButtons =
        document.querySelectorAll(
            '[data-appointment="call"]'
        );


    callButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            window.location.href =
                `tel:${clinicPhone}`;

        });

    });


    /* =====================================================
       EMAIL APPOINTMENT
       ===================================================== */

    const emailButtons =
        document.querySelectorAll(
            '[data-appointment="email"]'
        );


    emailButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const subject =
                "Appointment Request - Smile Nest Dental Clinic";

            const body =
                "Hello Smile Nest Dental Clinic,\n\n" +
                "I would like to book a dental appointment.\n\n" +
                "Preferred date:\n" +
                "Preferred time:\n" +
                "Patient name:\n" +
                "Contact number:\n\n" +
                "Thank you.";

            const mailto =
                `mailto:${clinicEmail}` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

            window.location.href = mailto;

        });

    });


    /* =====================================================
       PRE-FILLED SERVICE APPOINTMENT
       ===================================================== */

    document
        .querySelectorAll("[data-service]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();

                const service =
                    button.getAttribute("data-service");


                const message =
                    `Hello Smile Nest Dental Clinic,\n\n` +
                    `I would like to enquire about ${service} ` +
                    `and would like to book an appointment.\n\n` +
                    `Please let me know the available timings.`;

                const url =
                    `https://wa.me/${whatsappNumber}` +
                    `?text=${encodeURIComponent(message)}`;

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            });

        });

});
