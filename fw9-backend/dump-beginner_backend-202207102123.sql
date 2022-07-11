--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-07-10 21:23:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE beginner_backend;
--
-- TOC entry 3337 (class 1262 OID 16478)
-- Name: beginner_backend; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE beginner_backend WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';


ALTER DATABASE beginner_backend OWNER TO postgres;

\connect beginner_backend

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16494)
-- Name: profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    fullname character varying,
    phonenumber character varying,
    balance double precision,
    picture character varying,
    user_id integer
);


ALTER TABLE public.profile OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16540)
-- Name: transaction_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction_type (
    id integer NOT NULL,
    name character varying,
    description text
);


ALTER TABLE public.transaction_type OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16547)
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    id integer NOT NULL,
    amound double precision,
    recipient_id integer NOT NULL,
    sender_id integer,
    notes text,
    "time" date,
    type_id integer
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16487)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    username character varying,
    pin character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16486)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3329 (class 0 OID 16494)
-- Dependencies: 211
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profile (id, fullname, phonenumber, balance, picture, user_id) FROM stdin;
1	FAZZ	081234532343	100000	1657462978964.webp	\N
\.


--
-- TOC entry 3330 (class 0 OID 16540)
-- Dependencies: 212
-- Data for Name: transaction_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction_type (id, name, description) FROM stdin;
\.


--
-- TOC entry 3331 (class 0 OID 16547)
-- Dependencies: 213
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (id, amound, recipient_id, sender_id, notes, "time", type_id) FROM stdin;
\.


--
-- TOC entry 3328 (class 0 OID 16487)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, username, pin) FROM stdin;
1	user@mail.com	1234	user	123
3	exampleee@gmail.com	$2b$10$1ZKemzK2sw4SxMk7PZjScetWYI5vN/5Ys.naqaIGaKbpmdP46IBoi	percobaan4	123456
4	exampleee@gmail.com	$2b$10$lmz7Mp2NkPsdXVlHGnY.DecZzeApbq1hDgpk37ltgdhIH1DNDkscy	percobaan4	123456
6	papam@gmail.com	$2b$10$LSEWpVivBqlEcBBV5QhqXO37fsa5eYkz9HfDSKiMQqQaw4nB8P7VO	papam	039556
7	tester@gmail.com	$2b$10$apHOqoAsfYeWZNxHZgZ2RuRfAfVuCbwVOYNrhhSHPKHnUJjf19Q8S	tester	535634
8	sojimin@gmail.com	$2b$10$o4zZVfB4zwrnLHjDgpZaQuZQ4ClwaCM4bBT/8w6HYN0QP6Qf3s2ja	sojimin	112413
10	sojimin@gmail.com	$2b$10$oGKPdnROaqG4DOGt4RHr2e4/JKJtAusmlep3UAls.JZLRxV2yZZw6	sojimin	112413
\.


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- TOC entry 3179 (class 2606 OID 16500)
-- Name: profile profile_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pk PRIMARY KEY (id);


--
-- TOC entry 3181 (class 2606 OID 16546)
-- Name: transaction_type transaction_type_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction_type
    ADD CONSTRAINT transaction_type_pk PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16553)
-- Name: transactions transactions_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pk PRIMARY KEY (id);


--
-- TOC entry 3177 (class 2606 OID 16493)
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- TOC entry 3184 (class 2606 OID 16574)
-- Name: profile profile_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3185 (class 2606 OID 16579)
-- Name: transactions transactions_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_fk FOREIGN KEY (recipient_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 3186 (class 2606 OID 16584)
-- Name: transactions transactions_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_fk_1 FOREIGN KEY (sender_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- TOC entry 3187 (class 2606 OID 16589)
-- Name: transactions transactions_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_fk_2 FOREIGN KEY (type_id) REFERENCES public.transaction_type(id) ON DELETE SET NULL;


-- Completed on 2022-07-10 21:23:52

--
-- PostgreSQL database dump complete
--

