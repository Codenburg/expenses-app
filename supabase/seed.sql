-- create test users
INSERT INTO
    auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    ) (
        select
            '00000000-0000-0000-0000-000000000000',
            uuid_generate_v4 (),
            'authenticated',
            'authenticated',
            'user' || (ROW_NUMBER() OVER ()) || '@example.com',
            crypt ('password123', gen_salt ('bf')),
            current_timestamp,
            current_timestamp,
            current_timestamp,
            '{"provider":"email","providers":["email"]}',
            '{}',
            current_timestamp,
            current_timestamp,
            '',
            '',
            '',
            ''
        FROM
            generate_series(1, 10)
    );

INSERT INTO
    auth.identities (
        id,
        user_id,
        -- New column
        provider_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) (
        select
            uuid_generate_v4 (),
            id,
            -- New column
            id,
            format('{"sub":"%s","email":"%s"}', id :: text, email) :: jsonb,
            'email',
            current_timestamp,
            current_timestamp,
            current_timestamp
        from
            auth.users
    );

INSERT INTO
    public.balances(
        balances_id,
        user_id,
        cash_amount_available,
        debit_amount_available,
        created_at
    )
VALUES
    (
        1,
        (
            SELECT
                id
            FROM
                auth.users
            ORDER BY
                id
            LIMIT
                1
        ), 20000, 25000, current_timestamp
    );

INSERT INTO
    public.categories(
        category_id,
        user_id,
        created_at,
        category_name
    )
VALUES
    (
        1,
        (
            SELECT
                id
            FROM
                auth.users
            ORDER BY
                id
            LIMIT
                1
        ), current_timestamp,
        'Salud'
    );