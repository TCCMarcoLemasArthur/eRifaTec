/*
  Warnings:

  - You are about to drop the column `disponibilidadebilhete` on the `bilhete` table. All the data in the column will be lost.
  - You are about to drop the column `statussorteiobilheto` on the `bilhete` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `nofeed` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `rifa` table. All the data in the column will be lost.
  - You are about to drop the column `bairro` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `celular` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `usuario` table. All the data in the column will be lost.
  - You are about to alter the column `cpfusuario` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(14)` to `VarChar(11)`.
  - You are about to alter the column `formapagamento` on the `venda` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - Added the required column `foipremiado` to the `bilhete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusbilhete` to the `bilhete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idpremio` to the `rifa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idusuario` to the `rifa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `incluirrifafeed` to the `rifa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bairrousuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celularusuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cepusuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidadeusuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadousuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numerousuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ruausuario` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `datanascusuario` on the `usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bilhete" DROP COLUMN "disponibilidadebilhete",
DROP COLUMN "statussorteiobilheto",
ADD COLUMN     "foipremiado" BOOLEAN NOT NULL,
ADD COLUMN     "idvenda" INTEGER,
ADD COLUMN     "statusbilhete" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "premio" ALTER COLUMN "descpremio" SET DATA TYPE VARCHAR(500);

-- AlterTable
ALTER TABLE "rifa" DROP COLUMN "bairro",
DROP COLUMN "cep",
DROP COLUMN "cidade",
DROP COLUMN "estado",
DROP COLUMN "nofeed",
DROP COLUMN "numero",
DROP COLUMN "rua",
ADD COLUMN     "bairrorifa" VARCHAR(50),
ADD COLUMN     "ceprifa" VARCHAR(8),
ADD COLUMN     "cidaderifa" VARCHAR(50),
ADD COLUMN     "estadorifa" VARCHAR(50),
ADD COLUMN     "idpremio" INTEGER NOT NULL,
ADD COLUMN     "idusuario" INTEGER NOT NULL,
ADD COLUMN     "incluirrifafeed" BOOLEAN NOT NULL,
ADD COLUMN     "numerorifa" INTEGER,
ADD COLUMN     "ruarifa" VARCHAR(50),
ALTER COLUMN "titulorifa" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "descrifa" SET DATA TYPE VARCHAR(500),
ALTER COLUMN "statusrifa" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "bairro",
DROP COLUMN "celular",
DROP COLUMN "cep",
DROP COLUMN "cidade",
DROP COLUMN "estado",
DROP COLUMN "numero",
DROP COLUMN "rua",
ADD COLUMN     "bairrousuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "celularusuario" VARCHAR(20) NOT NULL,
ADD COLUMN     "cepusuario" VARCHAR(8) NOT NULL,
ADD COLUMN     "cidadeusuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "estadousuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "numerousuario" INTEGER NOT NULL,
ADD COLUMN     "ruausuario" VARCHAR(50) NOT NULL,
ALTER COLUMN "nomeusuario" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "cpfusuario" SET DATA TYPE VARCHAR(11),
DROP COLUMN "datanascusuario",
ADD COLUMN     "datanascusuario" DATE NOT NULL;

-- AlterTable
ALTER TABLE "venda" ALTER COLUMN "formapagamento" SET DATA TYPE VARCHAR(50);

-- AddForeignKey
ALTER TABLE "bilhete" ADD CONSTRAINT "fk_bilhete_venda" FOREIGN KEY ("idvenda") REFERENCES "venda"("idvenda") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rifa" ADD CONSTRAINT "fk_rifa_premio" FOREIGN KEY ("idpremio") REFERENCES "premio"("idpremio") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rifa" ADD CONSTRAINT "fk_rifa_usuario" FOREIGN KEY ("idusuario") REFERENCES "usuario"("idusuario") ON DELETE NO ACTION ON UPDATE NO ACTION;
