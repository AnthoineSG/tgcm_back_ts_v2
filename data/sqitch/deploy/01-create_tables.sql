-- Deploy the-good-choice-market:01-create_tables to pg

BEGIN;

CREATE TABLE "company" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT,
    "email" TEXT NOT NULL,
    "siret_number" BIGINT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "brand" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "brand_name" TEXT NOT NULL,
    "slogan" TEXT,
    "logo" TEXT,
    "activity_field" TEXT NOT NULL,
    "delivery_cost" FLOAT DEFAULT 0,
    "company_id" INTEGER REFERENCES "company"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tva" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "rate" FLOAT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "sub_category" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category_id" INTEGER REFERENCES "category"("id")
);

CREATE TABLE "product" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT,
    "barcode" TEXT,
    "expiration_date" TEXT,
    "height" TEXT,
    "width" TEXT,
    "depth" TEXT,
    "weight" TEXT,
    "size" TEXT,
    "price_ht" NUMERIC NOT NULL,
    "price_promo" NUMERIC,
    "price_kg" NUMERIC,
    "tva_id" INTEGER REFERENCES "tva"("id"),
    "brand_id" INTEGER REFERENCES "brand"("id"),
    "sub_category_id" INTEGER REFERENCES "sub_category"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT,
    "address" TEXT,
    "postal_code" TEXT,
    "city" TEXT,
    "country" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "buy" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id"),
    "product_id" INTEGER REFERENCES "product"("id")
);

-- ALTER TABLE "company" OWNER TO "tgcm_admin";
-- ALTER TABLE "brand" OWNER TO "tgcm_admin";
-- ALTER TABLE "buy" OWNER TO "tgcm_admin";
-- ALTER TABLE "product" OWNER TO "tgcm_admin";
-- ALTER TABLE "tva" OWNER TO "tgcm_admin";
-- ALTER TABLE "user" OWNER TO "tgcm_admin";

COMMIT;
