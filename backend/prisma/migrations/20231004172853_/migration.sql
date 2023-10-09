-- CreateTable
CREATE TABLE "bilhete" (
    "idbilhete" SERIAL NOT NULL,
    "numerobilhete" INTEGER NOT NULL,
    "statussorteiobilheto" BOOLEAN NOT NULL,
    "precobilhete" DECIMAL(15,2) NOT NULL,
    "disponibilidadebilhete" BOOLEAN NOT NULL,
    "idrifa" INTEGER NOT NULL,

    CONSTRAINT "pk_bilhete" PRIMARY KEY ("idbilhete")
);

-- CreateTable
CREATE TABLE "premio" (
    "idpremio" SERIAL NOT NULL,
    "nomepremio" VARCHAR(200) NOT NULL,
    "descpremio" VARCHAR(400) NOT NULL,
    "tipopremio" VARCHAR(50) NOT NULL,

    CONSTRAINT "pk_premio" PRIMARY KEY ("idpremio")
);

-- CreateTable
CREATE TABLE "rifa" (
    "idrifa" SERIAL NOT NULL,
    "titulorifa" VARCHAR(50) NOT NULL,
    "quantbilheterifa" INTEGER NOT NULL,
    "descrifa" VARCHAR(400) NOT NULL,
    "datasorteiorifa" DATE NOT NULL,
    "datainiciorifa" DATE NOT NULL,
    "statusrifa" VARCHAR(20) NOT NULL,
    "horasorteiorifa" TIME(6) NOT NULL,
    "cep" VARCHAR(9),
    "cidade" VARCHAR(100),
    "rua" VARCHAR(100),
    "estado" VARCHAR(100),
    "bairro" VARCHAR(100),
    "numero" VARCHAR(10),

    CONSTRAINT "pk_rifa" PRIMARY KEY ("idrifa")
);

-- CreateTable
CREATE TABLE "rifapremio" (
    "idbilhete" INTEGER NOT NULL,
    "idpremio" INTEGER NOT NULL,
    "idrifa" INTEGER NOT NULL,

    CONSTRAINT "pk_rifapremio" PRIMARY KEY ("idbilhete","idpremio","idrifa")
);

-- CreateTable
CREATE TABLE "usuario" (
    "idusuario" SERIAL NOT NULL,
    "nomeusuario" VARCHAR(75) NOT NULL,
    "cpfusuario" VARCHAR(14) NOT NULL,
    "emailusuario" VARCHAR(100) NOT NULL,
    "senhausuario" VARCHAR(25) NOT NULL,
    "datanascusuario" VARCHAR(15) NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "rua" VARCHAR(100) NOT NULL,
    "estado" VARCHAR(100) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "numero" VARCHAR(10) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,

    CONSTRAINT "pk_usuario" PRIMARY KEY ("idusuario")
);

-- CreateTable
CREATE TABLE "venda" (
    "idvenda" SERIAL NOT NULL,
    "formapagamento" VARCHAR(100) NOT NULL,
    "precovenda" DECIMAL(15,2) NOT NULL,
    "datavenda" DATE NOT NULL,
    "idusuario" INTEGER NOT NULL,

    CONSTRAINT "pk_venda" PRIMARY KEY ("idvenda")
);

-- AddForeignKey
ALTER TABLE "bilhete" ADD CONSTRAINT "fk_bilhete_rifa" FOREIGN KEY ("idrifa") REFERENCES "rifa"("idrifa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "fk_venda_usuario" FOREIGN KEY ("idusuario") REFERENCES "usuario"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION;
