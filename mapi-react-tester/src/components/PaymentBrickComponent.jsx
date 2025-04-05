import React, { useEffect, useRef } from "react";

const PaymentBrickComponent = () => {
  const controllerRef = useRef(null);

  useEffect(() => {
    const initializeBrick = async () => {
      if (!window.MercadoPago) return;

      const mp = new window.MercadoPago("TEST-8a55c5f2-e6f7-43e4-abbb-b328d5a4e5d0", {
        locale: "es",
      });

      const bricksBuilder = mp.bricks();

      // Desmontar si ya existía
      if (controllerRef.current) {
        controllerRef.current.unmount();
      }

      try {
        const controller = await bricksBuilder.create("payment", "paymentBrick_container", {
          initialization: {
            amount: 10000,
            preferenceId: "123456789-test-preferenceid",
            payer: {
              firstName: "Juan",
              lastName: "Pérez",
              email: "correo@ejemplo.com",
            },
          },
          customization: {
            visual: {
              style: {
                theme: "default",  // o "dark" si prefieres un estilo oscuro
                customVariables: {
                  background: "#315D0F", // Dark Moss Green
                  baseColor: "#315D0F", // Color base de la paleta
                  borderColor: "#355621", // Dark Moss Green 2 (para bordes)
                  inputBackgroundColor: "#F8FDE9", // Beige para los campos de entrada
                  inputBorderColor: "#E4E4E4", // Platinum para los bordes de entrada
                  labelColor: "#355621", // Dark Moss Green 2 para las etiquetas
                  errorColor: "#FF0000", // Color rojo para los errores (puedes personalizarlo)
                  fontSize: "16px",
                  fontFamily: "'Segoe UI', sans-serif",
                },
              },
            },
            paymentMethods: {
              creditCard: "all",
              debitCard: "all",
              ticket: "all",
              bankTransfer: "all",
              atm: "all",
              onboarding_credits: "all",
              wallet_purchase: "all",
              maxInstallments: 6,
            },
          },
          callbacks: {
            onReady: () => {
              console.log("Brick listo");
            },
            onSubmit: ({ selectedPaymentMethod, formData }) => {
              console.log("Simulación de envío:", formData);
              return Promise.resolve();
            },
            onError: (error) => {
              console.error("Error en el brick:", error);
            },
          },
        });

        controllerRef.current = controller;
      } catch (err) {
        console.error("Fallo al crear el brick:", err);
      }
    };

    initializeBrick();

    return () => {
      // desmontar al salir del componente
      if (controllerRef.current) {
        controllerRef.current.unmount();
      }
    };
  }, []);

  return <div id="paymentBrick_container" />;
};

export default PaymentBrickComponent;
